const express = require('express')
const app = express()
const mysql = require('mysql');


const cors = require('cors');
//const { default: Category } = require('../client/src/components/Category');
app.use(cors());
app.use(express.json());

const nodemailer = require ('nodemailer')
const multer = require ("multer")

let today=new Date();
dd=today.getDate();
mm=today.getMonth()+1
yy=today.getFullYear()
let cdate=yy+"-"+mm+"-"+dd;
let ctime=today.toLocaleTimeString();

app.listen(3001,() => 
{
    console.log("running on port 3001");
});

app.get("/",(req,res) =>{
    res.send("Hello Sir..!")
});

const dbcon = mysql.createConnection({
    host: "localhost",
    "user":"root",
    "password":"",
    "database":"ecommerce",
})

dbcon .connect(function(err) {
    if(err) throw err;
    console.log("Connected");
});

//Give Feedback
app.post('/feedback',(req,res) =>{
    feeddata=req.body.feeddata
    user_id=feeddata.user_id
    pid=feeddata.pid
    about_product=feeddata.about_product
    about_service=feeddata.about_service
    suggestion=feeddata.suggestion

    dbcon.query("insert into feedback (user_id,pid,about_product,about_service,suggestion) values(?,?,?,?,?)",
    [user_id,pid,about_product,about_service,suggestion],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result);
        }
    });
});

//View Feedback details

app.get('/viewfeedback/',(req,res) =>{
    const q="select *from feedback";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});

//Delete feedback
app.delete('/delfeedback/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from feedback where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});

//Give Payment
app.post('/Payment',(req,res) =>{
    feeddata=req.body.feeddata
    order_id=feeddata.order_id
    order_amount=feeddata.order_amount
    payment_date=feeddata. payment_date
    user_id=feeddata. user_id
    transaction_no=feeddata. transaction_no
    

    dbcon.query("insert into Payment (order_id,order_amount,payment_date,user_id) values(?,?,?,?,?)",
    [order_id,order_amount,payment_date,user_id],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result);
        }
    });
    });

    //View Payment details

app.get('/viewPayment/',(req,res) =>{
    const q="select *from Payment";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});

//Delet payment
app.delete('/delPayment/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from Payment where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});

//Give Catogory
app.post('/category',(req,res) =>{
    feeddata=req.body.feeddata
    category_name=feeddata.category_name
   
    dbcon.query("insert into category (category_name) values(?)",
    [category_name],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result);
        }
    });
    });


//View category details

app.get('/viewcategory/',(req,res) =>{
    const q="select *from category";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});

//Delet category
app.delete('/delcategory/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from category where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});



//Give Product
//img storage config
let imgconfig = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,"../client/public/Upload");
    },
    //img filter
    filename:(req,file,callback) =>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isImage =(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }
    else{
        callback(null,error("only image is allowed"))
    }
}

let upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

app.post('/product',upload.single("file"),(req,res) =>{
   // feeddata=req.body.feeddata
    category=req.body.category
    product_name=req.body.product_name
    qty=req.body.qty
    uom=req.body.uom
    price=req.body.price
    stock=req.body.stock
    const {filename} = req.file
    console.log(req.file)
    description=req.body.description
    
    dbcon.query("insert into product (category,product_name,qty,uom,price,stock,image,description) values(?,?,?,?,?,?,?,?)",
    [category,product_name,qty,uom,price,stock,filename,description],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result);
        }
    });
});

//View Product details

app.get('/viewproduct/',(req,res) =>{
    const q="select *from product";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});

//Delet product
app.delete('/delproduct/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from product where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//Give logi
app.post('/loginf',(req,res) =>{
    feeddata=req.body.feeddata
    username=feeddata.username
    password=feeddata.password
    utype=feeddata.utype
    

    dbcon.query("insert into login (username,password,utype) values(?,?,?)",
    [username,password,utype],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result);
        }
    });
});


//Give Regist
app.post('/regist',(req,res) =>{
    feeddata=req.body.feeddata
    fname=feeddata.fname
    lname=feeddata.lname
    dob=feeddata.dob
    gender=feeddata.gender
    address=feeddata.address
    pincode=feeddata.pincode
    email=feeddata.email
    password=feeddata.password
    mobile_no=feeddata.mobile_no
    utype="user"

    dbcon.query("insert into registration (fname,lname,dob,gender,address,pincode,email,mobile_no) values(?,?,?,?,?,?,?,?)",
    [fname,lname,dob,gender,address,pincode,email,mobile_no],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            dbcon.query("insert into login(username,password,utype)values(?,?,?)",
            [email,password,utype])
            res.send(result);
        }
    });
});


//View Regist details

app.get('/viewregist/',(req,res) =>{
    const q="select *from registration";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});


//Delete rgist
app.delete('/delregist/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from registration where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});

//Login Aunthentic code

app.post('/login',(req,res)=>{
    logdata=req.body.logindata
    username=logdata.username
    password=logdata.password
    dbcon.query("SELECT * from login where username =? AND password =?",
    [username,password],
    (err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);}
            }
        
    );
});

// Forgot Password
app.post('/forgotpass',(req,res) => {
    const otp=Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
    username=req.body.email
    console.log(username)
    dbcon.query("SELECT * from login where username =?",[username],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                  user: "yashunaik2002@gmail.com",
                  pass: "ippdyokolaeshaim",
                },
              });
            
              let info = transporter.sendMail({
                from: '"Yashavant" <yashunaik2002@gmail.com>', // sender address
                to: username, // list of receivers
                subject: "ONE TIME PASSWORD", // Subject line
                text: "Your OTP:", // plain text body
                html: "<b>OTP: </b>"+otp, // html body
              }); 
              console.log("Message sent: %s", info.messageId);
            dbcon.query("insert into otp(otp,status)values(?,?)",
            [otp,'active'])
           res.send(result); }     
    }
    );
});

// Otp Verification
app.post('/otp',(req,res) => {
    otp=req.body.otp
    console.log(otp)
    dbcon.query("SELECT * from otp where otp =?",[otp],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            
           res.send(result); }     
    }
    );
});

// Reset Password Code

app.post('/resetpass',(req,res) => {
    newpass=req.body.newpass
    confirmpass=req.body.confirmpass
    uid=req.body.uid

        dbcon.query("update login set password=? where username =?",[newpass,uid],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
           res.send(result); }     
    }
    ); 
   
});

//add to cart
app.post('/addcart/:id/:uid',(req,res) =>{
    console.log("Order Sent")
    const qty = 1
    const id= req.params.id
    console.log("Hey" +id)
    const uid=req.params.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            const price=result[0].price
            const total=price
            dbcon.query("insert into customer_order(user_id,pid,qty,price,total,order_date,order_time,order_status,payment_status)values(?,?,?,?,?,?,?,?,?)",
            [uid,id,qty,price,total,cdate,ctime,'pending','pending'])
            //console.log(result[0].price)
            res.send(result);
            console.log(result)
        }
    });
});

//add to cart
app.post('/buy/:id/',(req,res) =>{
    console.log("Order Sent")
   // const qty = 1
    const id= req.params.id
    console.log("Hey" +id)
    qty=req.body.qty
    uid=req.body.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            const price=result[0].price
            const total=price*qty
            dbcon.query("insert into customer_order(user_id,pid,qty,price,total,order_date,order_time,order_status,payment_status)values(?,?,?,?,?,?,?,?,?)",
            [uid,id,qty,price,total,cdate,ctime,'confirm','pending'])
            //console.log(result[0].price)
            res.send(result);
            console.log(result)
        }
    });
});

//View mycart details
app.get('/mycart/:id/',(req,res) =>{
    const uid = req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on a.user_id = ? and a.pid=b.id and a.order_status=?";
    dbcon.query(q,[uid,'pending'],(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
    });
});

//Delet my cart
app.delete('/delmycart/:id',(req,res)=>{
    const id=req.params.id
    //console.log("hey"+key)
    dbcon.query("delete from customer_order where id = ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});

//View myorder details
app.get('/myorder/:id/',(req,res) =>{
    const uid = req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on a.user_id = ? and a.pid=b.id and a.order_status=?";
    dbcon.query(q,[uid,'confirm'],(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});


//Do payment through razorpay
app.post('/paybillnext/:price',(req,res)=>{
    console.log("payment Inserted")
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status="Paid"
    const id=Math.floor(Math.random()*(9999-1000+1)+1000)
    const q= "update customer_order set payment_status =?,order_status=? where user_id=?";
    dbcon.query(q,[status,'confirm',uid],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            dbcon.query("insert into payment(order_id,order_amount,payment_date,user_id,transaction_no) values(?,?,?,?,?)",
            [id,price,cdate,uid,payment_id])
            //console.log(result[0].price)
            res.send(result);
        }
    })
});

// Do Payment through razorpay  
app.post('/paybill/:id',(req,res) => {
    console.log("Payment Inserted")
    const id=req.params.id
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status='Paid'
    const q="update customer_order set payment_status=? where id=?";
    dbcon.query(q,[status,id],(err,result) => {
        if(err){
        console.log(err);}
        else{ 
            dbcon.query("insert into payment(order_id,order_amount,payment_date,user_id,transaction_no)values(?,?,?,?,?)",
            [id,price,cdate,uid,payment_id])
            //console.log(result[0].price)
            res.send(result);
        }
    });
});

//customer order
app.get('/cust',(req,res)=>{
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from  customer_order as a join product as b  on a.payment_status=? and a.pid=b.id";
    dbcon.query(q,["Paid"],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})

//view Today Details
app.get('/todays',(req,res)=>{
   // console.log(cdate)
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from  customer_order as a join product as b  on a.payment_status=? and a.pid=b.id and order_date=?";
    dbcon.query(q,["Paid",cdate],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})

//Vieworder

app.get('/vieworder',(req,res)=>{
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from  customer_order as a join product as b  on a.payment_status=? and a.pid=b.id";
    dbcon.query(q,["Paid"],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})


















