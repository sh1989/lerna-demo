import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from 'common';

const Title = ({ username }) => <h2>{`Hi, ${username}`}</h2>;

export default connect(state => ({
  username: getUsername(state)
}))(Title);
