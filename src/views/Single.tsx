import type {MediaItem} from 'hybrid-types/DBTypes';
import {useLocation, useNavigate, type NavigateFunction} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item as MediaItem;
  const navigate: NavigateFunction = useNavigate();
  return (
    <dialog open>
      {item && (
        <>
          <h2>{item.title}</h2>
          {item.media_type.split('/')[0] === 'image' && (
            <img src={item.filename} alt={item.description || item.title} />
          )}
          {item.media_type.split('/')[0] === 'video' && (
            // TODO: test with real video file
            <video src={item.filename} />
          )}
          <p>{item.description}</p>
          <p>
            Uploaded {new Date(item.created_at).toLocaleString('en-fi')} by user
            id {item.user_id}
          </p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
      )}
    </dialog>
  );
};

export default Single;
