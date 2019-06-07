const  db = require('../config/database');

module.exports = class User{
   constructor(user){
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.id = user.id ? user.id : '' 
   }
   save(){
   return db.execute("INSERT INTO users (name,email,phone) values(?,?,?)",[
      this.name,this.email,this.phone
   ]);
   }
   static userList(){
      return  db.execute("SELECT * FROM users ORDER BY id desc");
    }
    static delete(userId){
       return db.execute(`DELETE FROM users where id=${userId}`);
    }
    static edit(userId){
      return db.execute(`SELECT * FROM users where id=${userId}`);
    }
    update(){
     return db.execute(`UPDATE users SET 
     name = "${this.name}", email = "${this.email}", phone = "${this.phone}" 
     WHERE id=${this.id}`);
    }
}