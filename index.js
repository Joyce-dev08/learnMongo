const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db.js');
const User = require('./models/User.js');
const Product = require('./models/Product.js');
const Post = require('./models/Post.js');
const Comment = require('./models/Comment.js');


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

 connectDB().then(seedData);