import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

// const createChunk = componentName => {
//   return lazy(() => 
//     import(`../src/views/${componentName}`).then(module => ({
//       default: module[componentName],
//     }))
//   );
// };

// const HomeView = createChunk('HomeView');
// const MoviesSearchView = createChunk('MoviesSearchView');
// const MovieDetailsView = createChunk('MovieDetailsView');
// const CastView = createChunk('CastView');
// const ReviewsView = createChunk('ReviewsView');



export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomeView />} /> */}
          {/* <Route path="register" element={<RegisterView />} /> */}
          {/* <Route path="login" element={<LoginView />} /> */}
          {/* <Route path="contacts" element={<ContactsView />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};