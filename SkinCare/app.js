// const galleryContainer=document.querySelector('.gallery-container');
// const gallerycontrolsContainer=document.querySelector('.gallery-controls');
// const gallerycontrols=('previous', 'next');
// const galleryItems=document.querySelectorAll('.gallery-item');

// class Crausel {
//     constructor(container,item,controls){
//         this.crauselContainer=container;
//         this.crauselControls=controls;
//         this.crauselArray=[...item];
//     }

//     updateGallery(){
//         this.crauselArray.forEach(el=>{
//             el.classList.remove('gallery-item-1');
//             el.classList.remove('gallery-item-2');
//             el.classList.remove('gallery-item-3');
//             el.classList.remove('gallery-item-4');
//             el.classList.remove('gallery-item-5');
//         });
        
//         this.crauselArray.slice(0,5).forEach((el,i) => {
//             el.classList.add('gallery-item-$(i+1)');
//         });
//     }

//     setCurrentState(direction){
//         if(direction.classNamw=='gallery-controls-previous'){
//             this.crauselArray.unshift(this.crauselArray.pop());
//         }else{
//             this.crauselArray.push(this.crauselArray.shift());
//         }
//         this.updateGallery();
//     }

//     setControls(){
//         this.crauselControls.forEach(control=>{
//             gallerycontrolsContainer.appendChild(document.createElement('button')).className='gallery-controls-${control}';
//             document.querySelector('.gallery-controls-${control}').innerText=control;
//         })
//     }

//     useControls(){
//         const triggers=[...gallerycontrolsContainer.childNodes];
//         triggers.forEach(control=>{
//             control.addEventListener('click',e=>{
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }

// const exampleCrausel=new Crausel(galleryContainer,galleryItems,gallerycontrols);

// exampleCrausel.setControls();
// exampleCrausel.useControls();
