
let image = document.querySelectorAll('.image')
let previous = document.querySelector('.prevBtn');
let next = document.querySelector('.nextBtn');
console.log(image)

class ImageClass{
    constructor(Image,previous,next){
        this.image=arrImage
        this.previous=previous
        this.next=next
       

    }
    show(){
        console.log(this.image)
        this.image.forEach(function(image,index){
           image.style.left =`${index*100}%`
        })  
        
        var index=0
        next.addEventListener('click',function(){
            index=index+1;
             show();
        });

        previous.addEventListener('click',function(){
             index=index-1;
             show();

        });

        let len = image.length;
        console.log(len)

        function show(){
          if (index==len){
              index=0
            
          }
        }
        if(index<0){
           index=len-1
        
        }
        this.image.forEach(function(image){
        image.style.transform =`translateX(-${index*100}%)`;
        })
    }

        
}

let obj1 = new ImageClass(image,previous,next)
obj1.show()












//     show(a,b,c){
//         let len=a.length
//         console.log(len)
//         a[0].style.display="block"
//         var index=1
//         b.addEventListener('click',function(){
//             index=index-1
//             display(index)

//         })
//         c.addEventListener('click',function(){
//             index=index+1
//             display(index)
            
//         })

//         function display(x){
//             if(index==len){
//                 index=0;
//                 x=0;
                
//             }

//             if(index<0){
//                 index=(len-1);
//                 x=len-1;
//             }


//             for(let i of a){
//                 i.style.display="none"
//             }
//             a[index].style.display="block"
//         }
        
//     }
// }
// arrImage = ["img1.jpg","img2.jpg","img3.jpeg","img4.jpg","img5.jpg","img6.jpg"]

