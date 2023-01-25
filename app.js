let packages = [
    {
        to: 'Jean Claude Van Dam',
    priorityLevel: 'express',
    isFragile: 'false',
    trackingNumber: '123abc',
    },

    {
        to: 'Sylverster Stallone',
    priorityLevel: 'standard',
    isFragile: 'false',
    trackingNumber: '456bcd',
    },

    {to: 'Jackie Chan',
    priorityLevel: 'free',
    isFragile: 'false',
    trackingNumber: '234def',
    },

    {to: 'Chuck Norris',
    priorityLevel: 'priority',
    isFragile: 'true',
    trackingNumber: '456cba',
    },

    {to: 'Keanu Reeves',
    priorityLevel: 'express',
    isFragile: 'false',
    trackingNumber: '321bca',
    },

    {to: 'Sammual L. Jackson',
    priorityLevel: 'free',
    isFragile: 'false',
    trackingNumber: '432abc',
    },

    {to: 'Tom Cruise',
    priorityLevel: 'priority',
    isFragile: 'true',
    trackingNumber: '132fed',
    },

]
// packages.forEach(package => 
//     {console.log('packages');
//     })

// NOTE: FUNCTIONS:
function drawPackages(array){
    let packageElement = document.getElementById('packages')
    console.log(packageElement);
    let template = ''
   
    array.forEach(package => { template += package.to })
    packageElement.innerText = template 
    // let allPackages = ''

}


function filterPackagesPriority(){
    const Priority = packages.filter(package => package.priorityLevel == 'priority')
    console.log(Priority);
    drawPackages(Priority)
}

function filterPackagesFragile(){
    const Fragile = packages.filter(package => package.isFragile == 'true')
    console.log(Fragile);
    drawPackages(Fragile)
}

function findTrackingNumber(){
    const Tracking = packages.find(package => package.trackingNumber == '')
    console.log(Tracking )
}

function searching(){
    let searching = window.prompt('Tracking Number Please') 
console.log(searching); 
const foundPackage = packages.find(package => package.trackingNumber == searching)
console.log(foundPackage);
// if (foundPackage.trackingNumber == searching){
//     window.alert('${searching.trackingNumber}')
// }
drawPackages([foundPackage])
}


// Section "Draw"
drawPackages(packages)