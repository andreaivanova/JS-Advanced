class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = []

        this.arr = [];
        this.arrGuests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }

        if (!this.arr.includes(articleName)) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
            this.arr.push(articleName)
        } else {

            let index = this.arr.indexOf(articleName);
            this.listOfArticles[index].quantity += quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`


    }


    inviteGuest(guestName, personality) {
        if (this.arrGuests.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points;
        if (personality === 'Vip') {
            points = 500
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50
        }
        this.guests.push({ guestName, points, purchaseArticle: 0 })
        this.arrGuests.push(guestName)
        return `You have successfully invited ${guestName}!`
    }


    buyArticle(articleModel, articleName, guestName) {
        articleModel=articleModel.toLowerCase()
        if (!this.arr.includes(articleName)) {
            throw new Error('This article is not found.')

        }

        let index = this.arr.indexOf(articleName);
        if (this.listOfArticles[index].articleModel !== articleModel) {
            throw new Error('This article is not found.')
        }
        if (this.listOfArticles[index].quantity === 0){
            return `The ${articleName} is not available.`

        }

        if (!this.arrGuests.includes(guestName)){
            return 'This guest is not invited.'
        }
        let index2=this.arrGuests.indexOf(guestName);
        //console.log(this.guests[index2].points);
        //console.log(this.possibleArticles[articleModel]);
        if (this.guests[index2].points >= this.possibleArticles[articleModel]){
            this.listOfArticles[index].quantity--;
            this.guests[index2]['purchaseArticle']++
        } else {
            return `You need to more points to purchase the article.`
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`



    }

    showGalleryInfo(criteria){
        let output='';
        if (criteria==='article'){
            output+='Articles information:'
            this.listOfArticles.forEach(x=>
                output+=`\n${x.articleModel} - ${x.articleName} - ${x.quantity}`
                )


        } else if(criteria==='guest'){
            output+='Guests information:'
            this.guests.forEach(x=>
                output+=`\n${x.guestName} - ${x.purchaseArticle}`
                )
           
        }
        return output;
    }



}



// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));



// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));



// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));




// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
