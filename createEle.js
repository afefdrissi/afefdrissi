function cEle(ele,childrenArrayOrstring){
    let element=document.createElement(ele);
    if (arguments.length==2){
                if (Array.isArray(arguments[1])){
            for (let i=0;i<arguments[1].length;i++){
                if (typeof arguments[1][i]!="string"){
                    element.appendChild(arguments[1][i]);

                }
                else{
                    let textnode=document.createTextNode(arguments[1][i]);
                    element.appendChild(textnode); 
                }
            }
            }
            else {
                let textnode=document.createTextNode(childrenArrayOrstring);
                element.appendChild(textnode);
            }

    }

    
    return element;
}
