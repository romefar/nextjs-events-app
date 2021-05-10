class CommentService {
  getComments = async (eventId, limit) => {
    const res = await fetch(`http://localhost:3000/api/comments/${eventId}${limit ? `?limit=${limit}` : ''}`);
    const data = await res.json();

    return data;
  }

  createComment = async (data) => {
    const res = await fetch(`http://localhost:3000/api/comments/${data.eventId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.ok;
  }
}

export default new CommentService();
