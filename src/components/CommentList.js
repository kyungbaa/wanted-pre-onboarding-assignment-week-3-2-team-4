import React from "react";
import styled from "styled-components";

function CommentList({ onFixClick, onDeleteClick, comments }) {
  return comments.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt='' />
      {comment.author}
      <CreatedAt>{comment.createdAt}</CreatedAt>
      <Content>{comment.content}</Content>
      <Button>
        <button data-id={comment.id} onClick={onFixClick}>
          수정
        </button>
        <button data-id={comment.id} onClick={onDeleteClick}>
          삭제
        </button>
      </Button>
      <hr />
    </Comment>
  ));
}

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
    background-color: white;
  }
`;

export default CommentList;
