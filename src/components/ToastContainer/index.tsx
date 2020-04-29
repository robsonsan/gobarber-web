import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FunctionComponent<ToastContainerProps> = ({
  messages,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => {
        return <Toast key={key} message={item} style={props} />;
      })}
    </Container>
  );
};

export default ToastContainer;
