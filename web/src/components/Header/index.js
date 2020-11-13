import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/headerLogo.png';
import foto from '~/assets/FotoMinera.png';

import { Container, Profile, Content } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="SomincorApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar !== null ? (
                  profile.avatar.url
                ) : (
                  <img src={foto} alt="SomincorApp" />
                )
                // : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
