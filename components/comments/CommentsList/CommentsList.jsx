import React from 'react';
import moment from 'moment';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './CommentsList.module.css';

const CommentList = ({ comments }) => {
  return (
    <List className={styles.comments}>
      {comments.map((i) => (
        <List.Item key={i.id} className={styles.commentListItem}>
          <div>
            <Avatar size={50} icon={<UserOutlined />} />
            <p className={styles.textItem}>{i.name}</p>
            <p className={styles.textItem}>{moment(i.postDate).format('DD.MM.YYYY h:s')}</p>
          </div>
          <p className={styles.commentText}>{i.text}</p>
        </List.Item>
      ))}
    </List>
  );
};

export default CommentList;
