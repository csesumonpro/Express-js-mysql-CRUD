exports.getHomePage =  (req, res, next)=>{
    res.render('index', { pageTitle: 'Express Js' });
  };