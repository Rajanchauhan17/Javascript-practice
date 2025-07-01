// find area of triangle by using herons formula
function areaofT(firstside,secondside,thirdside){
    if(firstside+secondside<=thirdside||firstside+thirdside<=secondside||secondside+thirdside<=firstside){
        return null;
    }
    let side=(firstside+secondside+thirdside)/2
    let areaofTriangle=Math.sqrt(side*(side-firstside)*(side-secondside)*(side-thirdside))
    console.log(`Area of Triangle is ${areaofTriangle} cm`)
    return areaofTriangle;
}
 areaofT(55,32,32)
