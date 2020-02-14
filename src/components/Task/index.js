import React from 'react';

import { Todo } from './styles';

export default function Task(props) {
  return <Todo color={props.color}>{props.value}</Todo>
}
