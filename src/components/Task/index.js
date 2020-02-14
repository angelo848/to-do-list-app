import React from 'react';

import { Todo } from './styles';

export default function Task(props) {
  return <Todo color={props.color} onClick={() => props.onClick(props.index)}>{props.value}</Todo>
}
