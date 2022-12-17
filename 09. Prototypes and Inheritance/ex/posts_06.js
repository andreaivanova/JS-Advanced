function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(value) {
            this.comments.push(value);
        }

        toString() {
            let outputComments = '';
            for (let i = 0; i < this.comments.length; i++) {
                if (i === this.comments.length - 1) {
                    outputComments += ` * ${this.comments[i]}`;
                    break;
                }
                outputComments += ` * ${this.comments[i]}\n`
            }
            // this.comments.forEach(x=>outputComments+=` * ${x}\n`)
            //  console.log(outputComments);

            if (this.comments.length === 0) {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            }
            return super.toString() + `\nRating: ${this.likes - this.dislikes}\nComments:\n${outputComments}`
        }
    }
    //${this.comments.forEach(x=>` * ${x}`)}

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;

        }
        view() {
           this.views++
           return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// Post: Post
// Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
// // console.log(scm.comments);


// console.log(scm.toString());

let blog = new classes.BlogPost('andrea', 'contentAndrea',52)
 blog.view();
 blog.view();
 blog.view();
 blog.view();
console.log(blog.toString())






// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
