import { RootState } from '../store';
import { ProfileState } from './profile.state';

export const profileSelector = (state: RootState): ProfileState => state.profile;