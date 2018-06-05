# Quidproquo (in progress)

<img src="./assets/images/logo-small.png" width=100>

[Interactive Prototype](https://projects.invisionapp.com/prototype/Quidproquo-test-cjhrc7em10040z701r81ejsuz/play/e3ba0814)

## Introduction

**Quidproquo** is a mobile (Android and iOS) application built on a simple premise: the exchange of favors. Taking the best elements of Taskrabbit and Tinder and completely eliminating money or awkward interactions from the equation, **Quidproquo** aims to help you get favors done, learn new skills, or do something new in exchange for doing what you're good at.

## Technologies

**Quidproquo** will be built on the following stack:

MongoDB with Mongoose • Express • React Native • Redux • Node.js • Firebase

## Implmentation Timeline

**5/30 - 6/2**

- Finish React Native Udemy Course
- Finish prototype, schema, routes

**6/3 - 6/9**

- Implement user authentication with Firebase
- Construct mockup of app in React Native
- Begin with styling

**6/9 - 6/16**

- Polish styling and application flow
- Write tests and receive feedbacks from users
- Publish on App Store / Google Play Store

## MVPs

1.  User authentication (OAuth)

- Users will be able to seamlessly login using Google and Facebook authentication.

2.  User profiles

- Users will be able to customize their profile with photos, as well as skills/favors/services they are looking for and ones that they can provide.

3.  Location-based matching system

- Users will have a feed of other users in their area, with the ability to swipe left (not interested) or right (interested) to create a _match_.

4.  Live chat

- Once users match, they will have the opportunity to

## Database schema

### users

| column name   |     data type      |                        details |
| :------------ | :----------------: | -----------------------------: |
| \_id          |      integer       |          not null, primary key |
| firstName     |       string       |      not null, indexed, unique |
| sessionToken  |       string       |      not null, indexed, unique |
| about         |        text        |                                |
| profileImages | array (of strings) | default: ['profile_image.png'] |
| location      | array (of coords)  |                                |
| updatedAt     |      datetime      |                       not null |

### conversations

| column name | data type |               details |
| :---------- | :-------: | --------------------: |
| \_id        |  integer  | not null, primary key |
| userOneId   |  integer  | not null, foreign key |
| userTwoId   |  string   | not null, foreign key |

(Uniqueness validation scoped between the two users)

### messages

| column name    | data type |                        details |
| :------------- | :-------: | -----------------------------: |
| \_id           |  integer  |          not null, primary key |
| senderId       |  integer  |      not null, indexed, unique |
| conversationId |  integer  | not null, indexed, foreign key |
| createdAt      |   date    |                       not null |

## Component Hierarchy

`LoggedOutPage`

- InstructionCard
- ProgressBar
- LoginButton

`UserProfilePage`

`ProfileEditPage`

`UserFeed`

- `PictureCarousel`
  - props: profileImages
- `ProfileCard`

`ChatPage`

- `MessageIndex`
- `Message`
  - props: `senderId`
- `MessageForm`

## Routes

## Additional Features (to be implemented):

- Calendar: Users can schedule appointments through a calendar system.
- Reviews: Users who have completed an exchange can mutually leave feedback for future potential matches to see.
- Search: Rather than being limited to people in one's area, users may search for services of others by category. (Would require a skills table that is joined to a user to be more easily searchable)
- Credits: Credits can be earned and used instead of
