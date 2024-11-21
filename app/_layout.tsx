import { Slot } from 'expo-router';
import { SessionProvider } from '@/providers/ctx';
import { Provider } from 'react-redux';
import { store } from '@/services/redux/store';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <Provider store={store}>
      
      <SessionProvider>
        <Slot/>
      </SessionProvider>
      
    </Provider>
  );
}
