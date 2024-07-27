export class SignUpUser {
   id: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;

   constructor(json: Partial<SignUpUser>) {
      Object.assign(this, json);
   }

   validate() {
      if (!this.id) {
         throw new Error("Id is required");
      }
      if (!this.firstName) {
         throw new Error("First Name is required");
      }
      if (this.firstName.length < 5) {
         throw new Error("First Name must be at least 5 characters long");
      }
      if (!this.lastName) {
         throw new Error("Last Name is required");
      }
      if (this.lastName.length < 5) {
         throw new Error("Last Name must be at least 5 characters long");
      }
      if (!this.email) {
         throw new Error("Email is required");
      }
      if (!this.password) {
         throw new Error("Password is required");
      }
      if (this.password.length < 8) {
         throw new Error("Password must be at least 8 characters long");
      }
      if (this.password !== this.confirmPassword) {
         throw new Error("Passwords do not match");
      }
   }
}

export class SignInUser {
   email: string;
   password: string;

   constructor(json: Partial<SignInUser>) {
      Object.assign(this, json);
   }

   validate() {
      if (!this.email) {
         throw new Error("Email is required");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
         throw new Error("Invalid email");
      }
      if (!this.password) {
         throw new Error("Password is required");
      }
   }
}

export class UserPost {
   postId: string;
   title: string;
   description: string;
   category: string;
   imageUri: string;

   constructor(json: Partial<UserPost>) {
      Object.assign(this, json);
   }

   validate() {
      if (!this.postId) {
         throw new Error("Post Id is required");
      }
      if (!this.title) {
         throw new Error("Title is required");
      }
      if (this.title.length < 5) {
         throw new Error("Title must be at least 5 characters long");
      }
      if (!this.description) {
         throw new Error("Description is required");
      }
      if (!this.category) {
         throw new Error("Category is required");
      }
      if (!this.imageUri) {
         throw new Error("Image is required");
      }
   }
}

export class UpdateUser {
   age: number;
   bio: string;
   profilePic: string;
   dateOfBirth: string;

   constructor(json?: Partial<UpdateUser>) {
      Object.assign(this, json);
   }

   validate() {
      if (this.age && this.age < 18) {
         throw new Error("Age must be at least 18");
      }
      if (this.bio && this.bio.length < 10) {
         throw new Error("Bio must be at least 10 characters long");
      }
   }
}

export class User {
   createdAt: string;
   email: string;
   firstName: string;
   id: string;
   lastName: string;
   postIds: string[];
   age: number;
   bio: string;
   profilePic: string;
   dateOfBirth: string;

   constructor(json: Partial<User>) {
      Object.assign(this, json);
   }
}

export class Post {
   postId: string;
   title: string;
   description: string;
   imageUri: string;
   category: string;
   createdBy: string;
   createdAt: string;

   constructor(json: Partial<Post>) {
      Object.assign(this, json);
   }
}
