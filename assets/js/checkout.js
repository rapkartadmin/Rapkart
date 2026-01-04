const productArray = [
    {
        productId: 1,
        productTitle:"Custom Moon Lamp",
        productCost: 666,
        productImage:[
            "https://5.imimg.com/data5/SELLER/Default/2022/11/OZ/WT/CP/160448689/10cm-500x500.jpg"
        ],
        productDimensions:"14cm x 14cm x 14cm",
        productWeight:"250g",
        productOutputVoltage:"12v",
        productInputVoltage:"220v",
        productColor:"White",
        productFileFields:[
            {
                fieldName:"userImage",
                fieldTitle:"Custom Image",
            }
        ],
        productTextFields:[],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
    {
        productId: 2,
        productTitle:"Custom Bed Lamp",
        productCost: 888,
        productImage:[
            "https://3dthis.com/images/litho/litho.jpg",
        ],
        productDimensions:"12cm x 12cm x 20cm",
        productWeight:"500g",
        productOutputVoltage:"12v",
        productInputVoltage:"220v",
        productColor:"White | Orange",
        productFileFields:[
            {
                fieldName:"userImageOne",
                fieldTitle:"Custom Image One",
            },
            {
                fieldName:"userImageTwo",
                fieldTitle:"Custom Image Two",
            },
            {
                fieldName:"userImageThree",
                fieldTitle:"Custom Image Three",
            },
            {
                fieldName:"userImageFour",
                fieldTitle:"Custom Image Four",
            }
        ],
        productTextFields:[],
        productExpectedDeliveryDate:7,
        productMaterial:"Plastic"
    },
    {
        productId: 3,
        productTitle:"Custom Cube",
        productCost: 777,
        productImage:[
            "https://i.pinimg.com/736x/57/b7/b8/57b7b8c9cb974bd9fc49f2c48cc99bd1.jpg"
        ],
        productDimensions:"15cm x 15cm x 15cm",
        productWeight:"300g",
        productOutputVoltage:"N/A",
        productInputVoltage:"N/A",
        productColor:"Black",
        productFileFields:[
            {
                fieldName:"customImageOne",
                fieldTitle:"Top Side",
            },
            {
                fieldName:"customImageTwo",
                fieldTitle:"Front Side",
            },
            {
                fieldName:"customImageThree",
                fieldTitle:"Left Side",
            },
            {
                fieldName:"customImageFour",
                fieldTitle:"Right Side",
            },
        ],
        productTextFields:[],
        productExpectedDeliveryDate:4,
        productMaterial:"Plastic"
    },
    {
        productId: 4,
        productTitle:"Custom 3D Heart",
        productCost: 999,
        productImage:[
            "https://itslitho.com/wp-content/uploads/2022/01/272167033_464746065314239_7749669837756212223_n-1.png"
        ],
        productDimensions:"14cm x 14cm x 20cm",
        productWeight:"250g",
        productOutputVoltage:"12v",
        productInputVoltage:"220v",
        productColor:"White | Red | Black",
        productFileFields:[
            {
                fieldName:"userImage",
                fieldTitle:"Custom Image",
            }
        ],
        productTextFields:[],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
    {
        productId: 5,
        productTitle:"Custom Key Chain",
        productCost: 499,
        productImage:[
            "https://i.pinimg.com/originals/98/88/95/988895a7b66dce1c603c61c71e0f36f5.jpg"
        ],
        productDimensions:"5cm x 3cm x 3cm",
        productWeight:"50g",
        productOutputVoltage:"NA",
        productInputVoltage:"NA",
        productColor:"White",
        productFileFields:[],
        productTextFields:[
            {
                fieldName:"customName",
                fieldTitle:"Custom Name",
            }
        ],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
    {
        productId: 6,
        productTitle:"Custom Trio Box",
        productCost: 888,
        productImage:[
            "https://i.ytimg.com/vi/mJfR_HKHjUg/mqdefault.jpg"
        ],
        productDimensions:"15cm x 15cm x 7cm",
        productWeight:"250g",
        productOutputVoltage:"12v",
        productInputVoltage:"220v",
        productColor:"White",
        productFileFields:[
            {
                fieldName:"userImageOne",
                fieldTitle:"Left Top Image",
            },
            {
                fieldName:"userImageTwo",
                fieldTitle:"Center Image",
            },
            {
                fieldName:"userImageThree",
                fieldTitle:"Left Bottom Image",
            },
            {
                fieldName:"userImageFour",
                fieldTitle:"Right Bottom Image",
            },
        ],
        productTextFields:[],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
    {
        productId: 7,
        productTitle:"Custom Key Holder",
        productCost: 499,
        productImage:[
            "https://makerworld.bblmw.com/makerworld/model/USeb2eec216450a3/design/2025-02-03_a4d8e8181c5a9.jpeg?x-oss-process=image%2Fresize%2Cw_400%2Fformat%2Cwebp"
        ],
        productDimensions:"10cm x 10cm x 5cm",
        productWeight:"250g",
        productOutputVoltage:"NA",
        productInputVoltage:"NA",
        productColor:"White",
        productFileFields:[],
        productTextFields:[
            {
                fieldName:"customText",
                fieldTitle:"Custom Text",
            }
        ],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
    {
        productId: 8,
        productTitle:"3D Flip Name",
        productCost: 450,
        productImage:[
            "https://timeto3d.com/cdn/shop/files/Flip-name-plank_1024x1024.jpg?v=1688037607"
        ],
        productDimensions:"14cm x 14cm x 5cm",
        productWeight:"250g",
        productOutputVoltage:"NA",
        productInputVoltage:"NA",
        productColor:"White | Red",
        productFileFields:[],
        productTextFields:[
            {
                fieldName:"customNameOne",
                fieldTitle:"Custom Name One",
            },
            {
                fieldName:"customNameTwo",
                fieldTitle:"Custom Name Two",
            }
        ],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
     {
        productId: 9,
        productTitle:"Custom Pen Stand",
        productCost: 777,
        productImage:[
            "./assets/img/portfolio/litho_pen_stand.jpg"
        ],
        productDimensions:"12cm x 12cm x 10cm",
        productWeight:"250g",
        productOutputVoltage:"12v",
        productInputVoltage:"220v",
        productColor:"White | Orange",
        productFileFields:[
            {
                fieldName:"userImage",
                fieldTitle:"Custom Image",
            }
        ],
        productTextFields:[],
        productExpectedDeliveryDate:5,
        productMaterial:"Plastic"
    },
];

function startRenderCheckoutPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    const productDetails = productArray.find(product => product.productId == productId);
    if (productDetails) {
        renderCheckoutPage(productDetails);
    } else {
        console.error("Product not found");
    }
}

function renderCheckoutPage(product) {
    document.getElementById('productTitle').innerText = product.productTitle;
    document.getElementById('productCost').innerText = product.productCost;
    document.getElementById('productDimensions').innerText = product.productDimensions;
    document.getElementById('productWeight').innerText = product.productWeight;
    document.getElementById('productOutputVoltage').innerText = product.productOutputVoltage;
    document.getElementById('productInputVoltage').innerText = product.productInputVoltage;
    document.getElementById('productColor').innerText = product.productColor;
    document.getElementById('productMaterial').innerText = product.productMaterial;

    const fileFieldsContainer = document.getElementById('fileFieldsContainer');

    if (product.productFileFields.length === 0) {
        fileFieldsContainer.style.display = 'none';
    }else{
        fileFieldsContainer.style.display = 'table-caption';
        product.productFileFields.forEach(field => {
        const label = document.createElement('span');
        label.innerText = field.fieldTitle + ": ";
        const input = document.createElement('input');
        input.type = 'file';
        input.name = field.fieldName;
        input.className = 'my-2';
        fileFieldsContainer.appendChild(label);
        fileFieldsContainer.appendChild(input);
        });
    }

    const textFieldsContainer = document.getElementById('textFieldsContainer');
    
    if(product.productTextFields.length === 0){
        textFieldsContainer.style.display = 'none';
    }else{
        textFieldsContainer.style.display = 'table-caption';
        product.productTextFields.forEach(field => {
        const label = document.createElement('span');
        label.innerText = field.fieldTitle + ": ";
        const input = document.createElement('input');
        input.type = 'text';
        input.name = field.fieldName;
        input.className = 'my-2';
        textFieldsContainer.appendChild(label);
        textFieldsContainer.appendChild(input);
    });
    }

    let imageString = '';

    product.productImage.forEach((imageUrl, index) => {
        let singleImage = `
            <div class="swiper-slide rapkart-slide">
                <img src="${imageUrl}" alt="">
            </div>
        `;
        imageString += singleImage;
    });

    document.getElementById('productImageContainer').innerHTML = imageString;

    document.getElementById('expectedDeliveryDate').innerText = product.productExpectedDeliveryDate + " days";
}

window.onload = startRenderCheckoutPage;