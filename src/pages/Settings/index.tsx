import React from 'react';

import Card from '../../components/Card';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import ParticipantList from '../../components/ParticipantList';

const Settings = () => {
  return (
    <Card>
      <section>
        <h1>Let's start!</h1>
        <Form />
        <ParticipantList />
        <Footer />
      </section>
    </Card>
  )
};

export default Settings;
