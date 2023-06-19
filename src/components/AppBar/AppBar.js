import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <header>
      <AuthNav />
      <Navigation />
    </header>
  );
};
