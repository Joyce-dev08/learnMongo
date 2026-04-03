const User = require('./models/User.js');
const Product = require('./models/Product.js');
const Post = require('./models/Post.js');
const Comment = require('./models/Comment.js');
const Category = require('./models/Category.js');


 //create 
const createUser = async () => {
     const result = await User.create({
        name: "bertrand",
        email:"bertrand@gmail.com",
        phone: 799422766
     });

console.log('user added successfully'+result)
    }

    //read
const readUser = async() => {
    const result = await User.find() ;

    console.log('our data are: '+result);
}

//update
const updateUser = async() => {
    const result = await User.findByIdAndUpdate("69c39672b27f4ff33716236f", {
        name:"random"
    })

    console.log('user updated successfully'+result);
}

//delete
const deleteUser = async() => {
    await User.findByIdAndDelete("69c39672b27f4ff33716236f")

    console.log('user deleted successfully')
}
connectDB().then(deleteUser);

//Product Schema

//Create 
const createProduct = async() => {
    const result =await Product.create({
        name:"Laptop",
        price: 1200,
        quantity: 5
    });
    console.log('Product added successfully: ' + result);
}
//Read 
const readProduct = async() => {
    const result = await Product.find();

    console.log('All products: '+ result);
}

//update
const updateProduct = async() => {
    const result = await Product.findByIdAndUpdate("69c412fd5132e823cc5e8d52",{
        price: 5000
    }

    );
    console.log('Product updated successfully: '+ result);
}
 //Delete 

 const deleteProduct = async() => {
    await Product.findByIdAndDelete("69c412fd5132e823cc5e8d52");
    console.log('Product deleted successfully');
 }

 //Category 
 const createCategory = async () => {
    const result = await Category.create({
        name: "Technology",
        description: "All about tech",
        slug: "technology"
    });

    console.log('Category created:', result);
 }

//seed blog data
const seedData = async() => {
    //clear database
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();

    console.log('data cleared successfully')

    //create account
    const user1 = await User.create({
        name: "Lisa",
        email: "Lisa@gmail.com",
        phone: 789007843
    })

    const user2 = await User.create({
        name: "Joyce",
        email: "joyce@gmail.com",
        phone: 78888888
    })

    console.log('accounts created successfully');

    //create a post
    const post1 = await Post.create({
        title: "Let me ask you something!",
        body: "How is the internership so far",
        author: user1._id
    })

    console.log('post was added successfully')

    //create a comment
    const comment1 = await Comment.create({
        text: "Super Exciting",
        author: user2._id,
        post: post1._id
    })

    const comment2 = await Comment.create({
        text: "Me too",
        author: user1._id, 
        post:post1._id
    })

    console.log("comments added successfully")

    //read post woth populate
   const readPost = await Post.find().populate('author','name');
   console.log("Post are:c "+readPost)

   //read comment with populate
   const readComment = await Comment.find()
   .populate('author','name')
   .populate('post','title');

   console.log('comments are: '+readComment)

}

//create post with category
const createPost = async() => {
    //get user
    const user = await User.findOne({email: "Lisa@gmail.com"});

    //get category 
    const category = await Category.findOne({ slug: "technology"});

    const result = await Post.create({
        title: "Introductio to Node.js",
        body: "This is a simple post about Node.js",
        author: user._id,
        category: category._id
    });

    console.log('Post created:', result);
}
//read post with category

const readPost = async() => {
    const result = await post.find()
    .populate('author')   //get user details
    .populate('category');  //get category details

    console.log('Post:', result);
}
// update post

const updatePost = async() => {
    const result = await Post.findByIdAndUpdate("", {
        title: "Updated Title"
    }
    );

    console.log('Post updated:', result);
}

//delete post

const deletePost = async() => {
    await Post.findByIdAndDelete("");

    console.log('Post deletes successfully');
}
connectDB().then(createPost);
// connectDB().then(readPost);
// connectDB().then(updatePost);
// connectDB().then(deletePost);