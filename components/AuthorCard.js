/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({
  firstName, lastName, email, firebaseKey, image, favorite,
}) {
  return (
    <>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Favorite: {favorite}</div>
      <div>E-Mail: {email}</div>
      <div>firebaseKey: {firebaseKey}</div>
      <img src={image} alt={firstName} />
    </>
  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favorite: PropTypes.bool,
  email: PropTypes.string,
  image: PropTypes.string,
  firebaseKey: PropTypes.string,
};

AuthorCard.defaultProps = {
  firstName: 'Roald',
  lastName: 'Dahl',
  favorite: true,
  email: 'roald@dahl.com',
  image: 'https://images.app.goo.gl/8fnZKjWZqE9w2BTb8',
  firebaseKey: '123',
};
