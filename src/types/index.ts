// User related types
export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  followers: string[]; // Array of user IDs
  following: string[]; // Array of user IDs
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  location?: string;
  website?: string;
}

// Post related types
export interface Post {
  id: string;
  authorId: string;
  content: string;
  images?: string[]; // Array of image URLs
  likes: string[]; // Array of user IDs who liked
  comments: Comment[];
  shares: number;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  tags?: string[]; // For hashtags
}

// Comment related types
export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  likes: string[]; // Array of user IDs who liked
  createdAt: Date;
  updatedAt: Date;
  parentId?: string; // For nested comments/replies
}

// Message related types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  isRead: boolean;
  createdAt: Date;
  attachments?: string[]; // Array of file URLs
}

// Chat/Conversation types
export interface Conversation {
  id: string;
  participants: string[]; // Array of user IDs
  lastMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
  isGroup: boolean;
  groupName?: string;
  groupImage?: string;
}

// Notification types
export interface Notification {
  id: string;
  userId: string; // Who receives the notification
  type: 'like' | 'comment' | 'follow' | 'mention' | 'message';
  fromUserId: string; // Who triggered the notification
  postId?: string; // If related to a post
  messageId?: string; // If related to a message
  isRead: boolean;
  createdAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface PostForm {
  content: string;
  images?: File[];
  isPublic: boolean;
  tags?: string[];
}

// Search types
export interface SearchFilters {
  query: string;
  type: 'users' | 'posts' | 'all';
  sortBy: 'recent' | 'popular' | 'relevance';
}

// App state types
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Context types
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (formData: RegisterForm) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}
