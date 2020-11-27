const db = require('./db');

module.exports= {
	validate: function(user, callback){//will use
		var sql = "select * from users where name='" +user.username+ "' and password='"+ user.password +"'";
		db.getResults(sql, function(results){
			//console.log(results.username);

			if(results.length >0 ){

				callback(results);
			}
			else{
			 	callback(results);
			 }
		});
	},
	/*getByIdCampaigns: function(id, callback){
		var sql = "select * from campaigns where id='"+id.c_id+"'";
		db.getResults(sql,function(results){
			callback(results);
		});
	}, */ 

	getallproductsbysearch: function(products,callback){
		var sql = "select * from products where  catagory='"+products.catagory+"' ";
		db.getResults(sql,function(results){
			callback(results);
		});
	},
	getallproducts: function(callback){
		var sql = "select * from products";
		db.getResults(sql,function(results){
			callback(results);
		});
	}, 
	getallbookmarked: function(callback){
		var sql = "select * from bookmarks";
		db.getResults(sql,function(results){
			callback(results);
		});
	},
	/*
	getAllfromusers: function(user,callback){
		var sql = "select * from users where id='"+user.id+"' ";
		db.getResults(sql,function(results){
			callback(results);
		});
	}, */
	
	insertprdocut: function(products, callback){
//	var sql	="INSERT INTO campaigns(uid,target_fund,raised_fund, ctype,description,image,publisedDate,endDate,status,title) VALUES ('"+campaign.uid+"','"+campaign.target_fund+"','"+campaign.raised_fund+"','"+campaign.ctype+"','"+campaign.description+"','"+campaign.image+"','"+campaign.Publish_date+"','"+campaign.endDate+"','"+campaign.status+"','"+campaign.title+"')";
	var sql=	"INSERT INTO products(Pname,Schart,price,catagory,model,status,image,uid,description) VALUES ('"+products.Pname+"', '"+products.Schart+"', '"+products.price+"', '"+products.catagory+"', '"+products.model+"', '"+products.status+"', '"+products.image+"', '"+products.uid+"','"+products.description+"')";
			db.execute(sql,function(status){
			callback(status);
			
		});

		

	},
	/*insertReport: function(report, callback){
	var sql	="INSERT INTO reports(cid,uid,description,updatedDate) VALUES ('"+report.cid+"','"+report.uid+"','"+report.description+"','"+report.u_date+"')";
			db.execute(sql,function(status){
			callback(status);
			
		});
	},

	insertContract: function(contract, callback){
	var sql	="INSERT INTO contactadmin(uid,description,UpdatedDate) VALUES ('"+contract.uid+"','"+contract.description+"','"+contract.u_date+"')";
			db.execute(sql,function(status){
			callback(status);
			
		});
	},
	search: function(title, callback){

		var sql = "select * from campaigns where title like '%"+title.name+"%'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
*/

	insertbookmarks: function(book, callback){
	var sql	="INSERT INTO bookmarks(pid,uid,date) VALUES ('"+book.cid+"','"+book.uid+"','"+book.u_date+"')";
			db.execute(sql,function(status){
			callback(status);
			
		});
	}, 
	registration: function(user, callback){
	var sql	="INSERT INTO users(name,email,phone_no,gender,password,type) VALUES ('"+user.username+"','"+user.email+"','"+user.phone_no+"','"+user.gender+"','"+user.password+"','"+user.type+"')";
			db.execute(sql,function(status){
			callback(status);
			
		});
	},/*
	getbyName: function(user,callback){
		var sql = "select * from users where username='" +user.username+ "' and password='"+ user.password +"'";
		db.getResults(sql,function(results){
			callback(results);
		});
	}, */
	update:function(user, callback){
		var sql="update products set id='"+user.id+"', Pname='"+user.Pname+"', Schart='"+ user.Schart +"',price='"+ user.price +"',catagory='"+ user.catagory +"',model='"+ user.model +"',status='"+ user.status+ "',image='"+user.image+"',uid='"+user.uid+"',description='"+user.description+"' where id= '"+ user.id +"'  ";
		db.execute(sql,function(status){
				callback(status);
			
		});
	},
	delete: function(user, callback){
		var sql="delete from products where id ='"+user.id+"' ";
			db.execute(sql,function(status){
				callback(status);
			
		});
	} 
}