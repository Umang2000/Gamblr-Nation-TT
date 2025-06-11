
export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Password should not typically be part of the client-side User object after login
  profileImageUrl?: string; // Added for profile picture
}
