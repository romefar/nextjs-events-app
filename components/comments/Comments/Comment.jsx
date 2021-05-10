import React, { useCallback, useEffect, useState } from 'react';
import commentService from '../../../services/commentService';
import CommentList from '../CommentsList';
import NewCommentForm from '../NewCommentForm';
import ErrorBoundary from '../../ErrorBoundary';

import styles from './Comments.module.css';

const Comments = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const loadMoreComments = useCallback(async () => {
    const recentComments = await commentService.getComments(eventId);

    setComments(recentComments);
  }, [eventId]);

  useEffect(() => {
    if (showComments) {
      loadMoreComments();
    }
  }, [showComments, loadMoreComments]);

  const toggleCommentsHandler = useCallback(() => {
    setShowComments((p) => !p);
  }, []);

  const addCommentHandler = useCallback(
    (eventId) => async (data) => {
      const isSuccess = await commentService.createComment({
        ...data,
        eventId
      });

      if (isSuccess) {
        loadMoreComments();
      }

      return isSuccess;
    },
    [eventId, loadMoreComments]
  );

  return (
    <ErrorBoundary>
      <section className={styles.comments}>
        <button onClick={() => toggleCommentsHandler()}>
          {showComments ? 'Hide' : 'Show'} Comments
        </button>
        {showComments && (
          <NewCommentForm onAddComment={addCommentHandler(eventId)} />
        )}
        {showComments && !comments.length && <p>No comments</p>}
        {showComments && !!comments.length && (
          <CommentList comments={comments} />
        )}
      </section>
    </ErrorBoundary>
  );
};

export default Comments;
