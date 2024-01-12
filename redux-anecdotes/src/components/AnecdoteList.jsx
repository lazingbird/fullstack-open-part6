import { useSelector, useDispatch } from "react-redux";
import { handleVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(state => {
    if (state.filter === "") {
      return state.anecdotes
    }
    else {
      return state.anecdotes.filter(anecdote => anecdote.content.toUpperCase().includes(state.filter.toUpperCase()))
    }
  })

  const vote = (id) => {
    console.log(id);
    dispatch(handleVote(id));
  };

  return (
    <div>
      {anecdotes
        .sort((p, c) => c.votes - p.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
