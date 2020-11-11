import React, { useState, useEffect } from 'react';

import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt'

import api from '~/services/api';

import { Container, Badge, Scroll, NotificationList, Notification } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(Notification => ({
        ...Notification,
        timeDistance: formatDistance(
          parseISO(Notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }))


      setNotifications(data);
    }

    loadNotifications();
  })

  function handleTogglevisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleTogglevisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
      <Notification unread>
              <p>Você possui novo pedido</p>
              <time>há 2 dias</time>
                <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui novo pedido</p>
              <time>há 2 dias</time>
                <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui novo pedido</p>
              <time>há 2 dias</time>
                <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui novo pedido</p>
              <time>há 2 dias</time>
                <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui novo pedido</p>
              <time>há 2 dias</time>
                <button type="button">Marcar como lida</button>
            </Notification>
            </Scroll>
      </NotificationList>
    </Container>
  )
}
