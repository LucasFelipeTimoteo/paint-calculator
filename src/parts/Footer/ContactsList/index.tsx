import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles'
import { footerContacts } from './utils/contactsListData';

export default function ContactsList() {
  const { footerContactsWrapper, footerItemTextLink } = useStyles()

  return (
    <div className={footerContactsWrapper}>
      {
        footerContacts.map(contact => (
          <Button
            startIcon={contact.icon}
            title={contact.title}
            key={contact.name}
          >
            <Typography
              variant='h2'
              component='p'
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className={footerItemTextLink}
              >
                {contact.name}
              </a>
            </Typography>
          </Button>
        ))
      }
    </div>
  );
}
