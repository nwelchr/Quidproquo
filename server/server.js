import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import { facebook, google } from './config';
import { Server } from 'net';

const transformFacebookProfile = profile => ({
  name: profile.name,
  avatar: profile.picture.data.url
});

const transformGoogleProfile = profile => ({
  name: profile.displayName,
  avatar: profile.image.url
});

// Register Facebook Passport strategy
passport.use(
  new FacebookStrategy(
    facebook,
    // Gets called when user authorizes access to their profile
    async (accessToken, refreshToken, profile, done) =>
      // Return done callback and pass transformed user object
      done(null, transformFacebookProfile(profile._json))
  )
);

// Register Google Passport strategy
passport.use(
  new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) =>
    done(null, transformGoogleProfile(profile._json))
  )
);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

const app = express();

app.use(passport.initialize());
app.use(passport.session());

// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) =>
    res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user))
);

// Set up Google auth routes
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) =>
    res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user))
);

// Launch server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});