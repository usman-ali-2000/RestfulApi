const express = require('express');
require("./conn");
const uploadImage = require("./categoryForm");
const Student = require("./students");
const Customer = require("./customer");
const Item = require('./items');
const Cart = require('./cart');
const Bill = require('./bill');
const Dboy = require('./dboy');
const Chat = require('./chat');
const Deliverynoti = require('./deliverynoti');
const fs = require('fs');
const app = express();
const cors = require("cors");
const { Db } = require('mongodb');

const PORT = process.env.PORT || 8000;

 app.use(cors());
 app.use(express.json());

 app.post("/bill", async(req, res)=>{
  const {date, name, address, email, phone, category, text, price, quantity, delivery, tax, total, status} = req.body;
  const billArray = await Bill.create({date, name, address, email, phone, category, text, price, quantity, delivery, tax, total, status});
  await billArray.save().then(()=>{
    res.status(201).send(billArray);
  }).catch((e)=>{
    res.status(400).send(e);
  })
})

 
app.get("/bill", async (req,res)=>{
 
  try{ const billItem = await Bill.find().sort({_id:-1});
   
     res.status(201).send(billItem);
 }catch(e){
     res.status(400).send(e);
   }
 
 });
 app.delete("/bill/:id", async (req, res)=>{
  try{
    const deleteBill = await Bill.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      res.status(201).send();
    }
    res.send(deleteBill);
  }catch(e){
     res.status(400).send(e);
  }
})
 app.patch("/bill/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateBill = await Bill.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateBill);
  }catch(e){
    res.status(400).send(e);  
  }
});


 app.post("/cart", async(req,res)=>{
  console.log(req.body);
  const cartItem = new Cart(req.body);
  await cartItem.save().then(()=>{
    res.status(201).send(cartItem);
  }).catch((e)=>{
    res.status(400).send(e);
  })
 })

 
 app.get("/cart", async (req,res)=>{
 
  try{ const cartItem1 = await Cart.find().sort({_id:-1});
   
     res.status(201).send(cartItem1);
 }catch(e){
     res.status(400).send(e);
   }
 
 });

 
 app.delete("/cart/:id", async (req, res)=>{
  try{
    const deleteCart = await Cart.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      res.status(201).send();
    }
    res.send(deleteCart);
  }catch(e){
     res.status(400).send(e);
  }
})

 app.post("/item", async(req,res)=>{
  console.log(req.body);
  const item = new Item(req.body);
  await item.save().then(()=>{
    res.status(201).send(item);
  }).catch((e)=>{
    res.status(400).send(e);
  })
 })

 app.get("/item", async (req,res)=>{
 
  try{ const item1 = await Item.find().sort({_id:-1});
   
     res.status(201).send(item1);
 }catch(e){
     res.status(400).send(e);
   }
 
 });

 
app.delete("/item/:id", async (req, res)=>{
  try{
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      res.status(201).send();
    }
    res.send(deleteItem);
  }catch(e){
     res.status(400).send(e);
  }
})

 app.get("/item/:id", async (req, res)=>{
  try{
    const findItem = await Item.findById(req.params.id);
    console.log(findItem);

    if(!findItem){
      res.status(201).send();
    }
    res.send(findItem);
  }catch(e){
     res.status(400).send(e);
  }
})



 app.post("/categoryForm", async (req,res)=>{
  console.log(req.body);
  const user = new uploadImage(req.body);
await  user.save().then(()=>{
    res.status(201).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})


app.get("/categoryForm", async (req,res)=>{
 
  try{ const user1 = await uploadImage.find().sort({_id:-1});
   
     res.status(201).send(user1);
 }catch(e){
     res.status(400).send(e);
   }
 
 });

app.delete("/categoryForm/:id", async (req, res)=>{
  try{
    const deleteCategory = await uploadImage.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      res.status(201).send();
    }
    res.send(deleteCategory);
  }catch(e){
     res.status(400).send(e);
  }
})

app.post("/customer", async (req,res)=>{
  console.log(req.body);
  const customer = new Customer(req.body);
await  customer.save().then(()=>{
    res.status(201).send(customer);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})


app.get("/customer", async (req,res)=>{
 
  try{ const customer1 = await Customer.find().sort({_id:-1});
   
     res.status(201).send(customer1);
 }catch(e){
     res.status(400).send(e);
   }
 
 });

 app.patch("/customer/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateCustomer = await Customer.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateCustomer);
  }catch(e){
    res.status(400).send(e);  
  }
});


 app.post("/students", async (req,res)=>{
  console.log(req.body);
  const user = new Student(req.body);
await  user.save().then(()=>{
    res.status(201).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})

app.get("/students", async (req,res)=>{
 
 try{ const user1 = await Student.find().sort({_id:-1});
  
    res.status(201).send(user1);
}catch(e){
    res.status(400).send(e);
  }

});

app.patch("/students/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateStudent);
  }catch(e){
    res.status(400).send(e);  
  }
});

app.get("/students/:id", async (req, res)=>{
  try{ const user3 = await Student.find().sort({_id:-1});
  
    res.status(201).send(user3);
}catch(e){
    res.status(400).send(e);
  }
});

app.post("/dboy", async (req,res)=>{
  console.log(req.body);
  const dbuser = new Dboy(req.body);
await  dbuser.save().then(()=>{
    res.status(201).send(dbuser);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})

app.get("/dboy", async (req,res)=>{
 
 try{ const dbuser1 = await Dboy.find().sort({_id:-1});
  
    res.status(201).send(dbuser1);
}catch(e){
    res.status(400).send(e);
  }

});

app.patch("/dboy/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateDboy = await Dboy.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateDboy);
  }catch(e){
    res.status(400).send(e);  
  }
});

app.post("/deliverynoti", async (req,res)=>{
  console.log(req.body);
  const deliveryuser = new Deliverynoti(req.body);
await  deliveryuser.save().then(()=>{
    res.status(201).send(deliveryuser);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})

app.get("/deliverynoti", async (req,res)=>{
 
 try{ const deliveryuser1 = await Deliverynoti.find().sort({_id:-1});
  
    res.status(201).send(deliveryuser1);
}catch(e){
    res.status(400).send(e);
  }

});

app.patch("/deliverynoti/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateDeliverynoti = await Deliverynoti.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateDeliverynoti);
  }catch(e){
    res.status(400).send(e);  
  }
});

app.post("/chat", async (req,res)=>{
  console.log(req.body);
  const chatuser = new Chat(req.body);
await  chatuser.save().then(()=>{
    res.status(201).send(chatuser);
  }).catch((e)=>{
    res.status(400).send(e);
  })

})

app.get("/chat", async (req,res)=>{
 
 try{ const chatuser1 = await Chat.find().sort({_id:-1});
  
    res.status(201).send(chatuser1);
}catch(e){
    res.status(400).send(e);
  }

});

app.patch("/chat/:id", async (req, res)=>{
  try{
    const _id = req.params.id;
    const updateChat = await Chat.findByIdAndUpdate(_id, req.body,{
    new: true
    });
    res.send(updateChat);
  }catch(e){
    res.status(400).send(e);  
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});