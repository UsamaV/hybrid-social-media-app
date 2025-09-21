/**
 * ============================================================================
 * STEP 1.2: TypeScript Interfaces for Social Media App
 * ============================================================================
 * 
 * CREATED: Project Setup Phase - Step 1.2
 * PURPOSE: Define data structures (interfaces) that our social media app will use
 * WHY: "Plan first, code second" - helps us understand what we're building
 * 
 * TypeScript Concepts Demonstrated:
 * - interface: Defines the shape/structure of objects
 * - ? (optional): Properties that may or may not exist
 * - string[]: Array of strings
 * - Date: Built-in TypeScript type for dates
 * - boolean: True/false values
 * - Union types: 'text' | 'image' | 'file'
 * - Generic types: ApiResponse<T>, PaginatedResponse<T>
 * 
 * This file teaches you:
 * 1. How to define data models before coding components
 * 2. Type safety - TypeScript catches errors at compile time
 * 3. Better IDE support with autocomplete
 * 4. Self-documenting code through types
 */

// ============================================================================
// USER RELATED TYPES
// ============================================================================

/**
 * User Interface - Defines the structure of a user in our social media app
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a user object should contain
 * 
 * Key TypeScript Concepts:
 * - interface: Creates a contract for object structure
 * - ? (optional): Properties that may or may not exist (bio?, avatar?)
 * - string[]: Array of strings (followers, following)
 * - Date: Built-in type for date/time values
 * - boolean: True/false values (isVerified)
 * 
 * Social Media Features Covered:
 * - Basic profile info (name, email, username)
 * - Social features (followers, following arrays)
 * - Profile customization (bio, avatar, cover image)
 * - Verification system (isVerified for blue checkmarks)
 * - Additional info (location, website)
 */
export interface User {
  id: string;                    // Unique identifier for each user
  username: string;              // @username for mentions and URLs
  email: string;                 // Login credential and contact
  firstName: string;             // Real first name
  lastName: string;              // Real last name
  bio?: string;                  // Optional: User's bio/description
  avatar?: string;               // Optional: Profile picture URL
  coverImage?: string;           // Optional: Cover photo URL
  followers: string[];           // Array of user IDs who follow this user
  following: string[];           // Array of user IDs this user follows
  createdAt: Date;               // When the account was created
  updatedAt: Date;               // When the profile was last updated
  isVerified: boolean;           // Blue checkmark for verified accounts
  location?: string;             // Optional: User's location
  website?: string;              // Optional: User's website URL
}

// ============================================================================
// POST RELATED TYPES
// ============================================================================

/**
 * Post Interface - Defines the structure of a social media post
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a post object should contain
 * 
 * Key TypeScript Concepts:
 * - Nested interfaces: Post contains Comment[] (array of Comment objects)
 * - Optional properties: images?, tags? (may or may not exist)
 * - Array types: string[] for images, Comment[] for comments
 * - number: Numeric values (shares count)
 * 
 * Social Media Features Covered:
 * - Content creation (text content, images)
 * - Social interactions (likes, comments, shares)
 * - Privacy settings (isPublic for public/private posts)
 * - Content organization (tags/hashtags for discovery)
 * - Timestamps for chronological feeds
 * - User relationships (authorId links to User)
 */
export interface Post {
  id: string;                    // Unique identifier for each post
  authorId: string;              // ID of the user who created the post
  content: string;               // The main text content of the post
  images?: string[];             // Optional: Array of image URLs
  likes: string[];               // Array of user IDs who liked this post
  comments: Comment[];           // Array of Comment objects (nested interface)
  shares: number;                // Number of times this post was shared
  createdAt: Date;               // When the post was created
  updatedAt: Date;               // When the post was last modified
  isPublic: boolean;             // Whether the post is visible to everyone
  tags?: string[];               // Optional: Array of hashtags
}

// ============================================================================
// COMMENT RELATED TYPES
// ============================================================================

/**
 * Comment Interface - Defines the structure of comments on posts
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a comment object should contain
 * 
 * Key TypeScript Concepts:
 * - Optional properties: parentId? for nested comments (replies)
 * - Self-referencing: Comments can have parent comments (replies)
 * - Foreign keys: postId, authorId link to other entities
 * - Array types: likes as string[] (user IDs)
 * 
 * Social Media Features Covered:
 * - User engagement through comments
 * - Nested comment system (replies to comments)
 * - Comment likes for additional engagement
 * - Timestamps for comment ordering
 * - User relationships (authorId links to User)
 * - Post relationships (postId links to Post)
 */
export interface Comment {
  id: string;                    // Unique identifier for each comment
  postId: string;                // ID of the post this comment belongs to
  authorId: string;              // ID of the user who wrote the comment
  content: string;               // The text content of the comment
  likes: string[];               // Array of user IDs who liked this comment
  createdAt: Date;               // When the comment was created
  updatedAt: Date;               // When the comment was last modified
  parentId?: string;             // Optional: ID of parent comment (for replies)
}

// ============================================================================
// MESSAGE RELATED TYPES
// ============================================================================

/**
 * Message Interface - Defines the structure of direct messages between users
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a message object should contain
 * 
 * Key TypeScript Concepts:
 * - Union types: 'text' | 'image' | 'file' (message can be one of these types)
 * - Optional properties: attachments? (may or may not have files)
 * - Boolean: isRead for read/unread status
 * 
 * Social Media Features Covered:
 * - Direct messaging between users
 * - Different message types (text, images, files)
 * - Read/unread status tracking
 * - File attachments support
 * - User relationships (senderId, receiverId)
 */
export interface Message {
  id: string;                    // Unique identifier for each message
  senderId: string;              // ID of the user who sent the message
  receiverId: string;            // ID of the user who receives the message
  content: string;               // The text content of the message
  type: 'text' | 'image' | 'file'; // Type of message (union type)
  isRead: boolean;               // Whether the message has been read
  createdAt: Date;               // When the message was sent
  attachments?: string[];        // Optional: Array of file URLs
}

// ============================================================================
// CONVERSATION RELATED TYPES
// ============================================================================

/**
 * Conversation Interface - Defines the structure of chat conversations
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a conversation object should contain
 * 
 * Key TypeScript Concepts:
 * - Nested interfaces: lastMessage? contains a Message object
 * - Optional properties: lastMessage?, groupName?, groupImage?
 * - Boolean: isGroup for group vs direct messages
 * 
 * Social Media Features Covered:
 * - Group messaging support
 * - Direct messaging between two users
 * - Last message preview
 * - Group customization (name, image)
 * - Multiple participants support
 */
export interface Conversation {
  id: string;                    // Unique identifier for each conversation
  participants: string[];        // Array of user IDs in the conversation
  lastMessage?: Message;         // Optional: The most recent message
  createdAt: Date;               // When the conversation was created
  updatedAt: Date;               // When the conversation was last updated
  isGroup: boolean;              // Whether this is a group conversation
  groupName?: string;            // Optional: Name for group conversations
  groupImage?: string;           // Optional: Image for group conversations
}

// ============================================================================
// NOTIFICATION RELATED TYPES
// ============================================================================

/**
 * Notification Interface - Defines the structure of user notifications
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Define what data a notification object should contain
 * 
 * Key TypeScript Concepts:
 * - Union types: 'like' | 'comment' | 'follow' | 'mention' | 'message'
 * - Optional properties: postId?, messageId? (depending on notification type)
 * - Boolean: isRead for read/unread status
 * 
 * Social Media Features Covered:
 * - Real-time notifications for user actions
 * - Different notification types (likes, comments, follows, etc.)
 * - Read/unread status tracking
 * - Links to related content (posts, messages)
 * - User relationships (userId, fromUserId)
 */
export interface Notification {
  id: string;                    // Unique identifier for each notification
  userId: string;                // ID of the user who receives the notification
  type: 'like' | 'comment' | 'follow' | 'mention' | 'message'; // Type of notification
  fromUserId: string;            // ID of the user who triggered the notification
  postId?: string;               // Optional: ID of related post
  messageId?: string;            // Optional: ID of related message
  isRead: boolean;               // Whether the notification has been read
  createdAt: Date;               // When the notification was created
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

/**
 * ApiResponse Interface - Generic type for API responses
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Standardize API response format across the app
 * 
 * Key TypeScript Concepts:
 * - Generic types: <T> allows this interface to work with any data type
 * - Optional properties: data?, error?, message? (only one will be present)
 * - Boolean: success indicates if the API call succeeded
 * 
 * Why This Matters:
 * - Consistent error handling across the app
 * - Type safety for API responses
 * - Better developer experience with autocomplete
 */
export interface ApiResponse<T> {
  success: boolean;              // Whether the API call was successful
  data?: T;                      // Optional: The actual data returned
  error?: string;                // Optional: Error message if failed
  message?: string;              // Optional: Success message
}

/**
 * PaginatedResponse Interface - Generic type for paginated API responses
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Handle large datasets with pagination
 * 
 * Key TypeScript Concepts:
 * - Generic types: <T> for any array of data
 * - Nested interfaces: pagination object inside the response
 * - number: All pagination properties are numeric
 * 
 * Why This Matters:
 * - Efficient loading of large datasets (posts, users, etc.)
 * - Better user experience with pagination
 * - Consistent pagination across the app
 */
export interface PaginatedResponse<T> {
  data: T[];                     // Array of data items
  pagination: {                  // Pagination metadata
    page: number;                // Current page number
    limit: number;               // Items per page
    total: number;               // Total number of items
    totalPages: number;          // Total number of pages
  };
}

// ============================================================================
// FORM TYPES
// ============================================================================

/**
 * LoginForm Interface - Defines the structure of login form data
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for login form inputs
 * 
 * Key TypeScript Concepts:
 * - Simple interface with required string properties
 * - Form validation will use these types
 * 
 * Why This Matters:
 * - Prevents typos in form field names
 * - IDE autocomplete for form handling
 * - Type safety when passing form data to functions
 */
export interface LoginForm {
  email: string;                 // User's email address
  password: string;              // User's password
}

/**
 * RegisterForm Interface - Defines the structure of registration form data
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for registration form inputs
 * 
 * Key TypeScript Concepts:
 * - All properties are required strings
 * - Form validation will use these types
 * 
 * Why This Matters:
 * - Ensures all required fields are captured
 * - Type safety for form submission
 * - Better user experience with proper validation
 */
export interface RegisterForm {
  username: string;              // Desired username
  email: string;                 // User's email address
  password: string;              // User's password
  confirmPassword: string;       // Password confirmation
  firstName: string;             // User's first name
  lastName: string;              // User's last name
}

/**
 * PostForm Interface - Defines the structure of post creation form data
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for post creation form inputs
 * 
 * Key TypeScript Concepts:
 * - Optional properties: images?, tags? (not required for every post)
 * - File[]: Array of File objects for image uploads
 * - Boolean: isPublic for privacy settings
 * 
 * Why This Matters:
 * - Handles different types of posts (text-only, with images, etc.)
 * - Type safety for file uploads
 * - Privacy settings support
 */
export interface PostForm {
  content: string;               // The text content of the post
  images?: File[];               // Optional: Array of uploaded image files
  isPublic: boolean;             // Whether the post is public or private
  tags?: string[];               // Optional: Array of hashtags
}

// ============================================================================
// SEARCH TYPES
// ============================================================================

/**
 * SearchFilters Interface - Defines the structure of search parameters
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for search functionality
 * 
 * Key TypeScript Concepts:
 * - Union types: 'users' | 'posts' | 'all' for search type
 * - Union types: 'recent' | 'popular' | 'relevance' for sorting
 * - String: query for search terms
 * 
 * Why This Matters:
 * - Consistent search functionality across the app
 * - Type safety for search parameters
 * - Better user experience with proper filtering
 */
export interface SearchFilters {
  query: string;                 // The search query string
  type: 'users' | 'posts' | 'all'; // What to search for
  sortBy: 'recent' | 'popular' | 'relevance'; // How to sort results
}

// ============================================================================
// APP STATE TYPES
// ============================================================================

/**
 * AppState Interface - Defines the global application state
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for global state management
 * 
 * Key TypeScript Concepts:
 * - Union types: User | null (user may or may not be logged in)
 * - Boolean: isAuthenticated, isLoading
 * - Union types: string | null for error (may or may not have errors)
 * 
 * Why This Matters:
 * - Centralized state management
 * - Type safety for global state
 * - Better debugging and development experience
 */
export interface AppState {
  user: User | null;             // Current logged-in user (null if not logged in)
  isAuthenticated: boolean;      // Whether user is logged in
  isLoading: boolean;            // Whether app is currently loading
  error: string | null;          // Current error message (null if no errors)
}

// ============================================================================
// CONTEXT TYPES
// ============================================================================

/**
 * AuthContextType Interface - Defines the authentication context
 * 
 * CREATED: Step 1.2 - Project Setup Phase
 * PURPOSE: Type safety for React Context API
 * 
 * Key TypeScript Concepts:
 * - Union types: User | null for user state
 * - Function types: login, register, logout, updateProfile
 * - Promise<void>: Async functions that don't return data
 * - Partial<User>: Allows partial user updates
 * 
 * Why This Matters:
 * - Type safety for React Context
 * - Better IDE support for context methods
 * - Consistent authentication API across components
 * - Prevents runtime errors from incorrect context usage
 */
export interface AuthContextType {
  user: User | null;             // Current logged-in user
  isAuthenticated: boolean;      // Whether user is logged in
  login: (email: string, password: string) => Promise<void>; // Login function
  register: (formData: RegisterForm) => Promise<void>; // Registration function
  logout: () => void;            // Logout function
  updateProfile: (userData: Partial<User>) => Promise<void>; // Profile update function
}
