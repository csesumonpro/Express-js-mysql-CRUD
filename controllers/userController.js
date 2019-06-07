const User = require('../models/user');
  exports.getUserList = (req,res,next)=>{
    User.userList()
    .then(([rows,fieldData])=>{
      res.render('user/users',{
        users:rows,
        pageTitle:'User List'
      });
    })
    .catch(err=>{
      console.log(err);
    }) 
  };
  exports.getAddNewUser = (req,res,next)=>{
    res.render('user/add-new',{
      pageTitle:'Add New User'
    });
  };
  exports.postAddNewUser = (req,res,next)=>{
    const user = new User(req.body);
    user.save()
    .then(()=>{
        res.redirect('/users');
    })
    .catch(err=>{
      console.log(err);
    })
  }
  exports.getUserDelete = (req,res,next)=>{
      User.delete(req.params.userId)
      .then(()=>{
        res.redirect('/users');
    })
    .catch(err=>{
      console.log(err);
    })
  };
  exports.getUserEdit = (req,res,next)=>{
    User.edit(req.params.userId)
    .then(([row,fieldData])=>{
      res.render('user/edit-user',{
        user:row[0],
        pageTitle:'Edit User'
      });
    })
    .catch(err=>{
      console.log(err);
    })
  };
  exports.postUpdateUser = (req,res,next)=>{
    const user = new User(req.body);
    user.update()
    .then(()=>{
        res.redirect('/users');
    })
    .catch(err=>{
      console.log(err);
    })
  }


