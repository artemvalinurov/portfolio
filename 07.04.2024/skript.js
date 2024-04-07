'use strikt'

// задача 3
// let n = Number(prompt('введите число'))
//     list = [];

// let i = 0;

// while(i < a){
//     i++;
//     list.push(i);
// }
// alert(list)

//задача 5
// let nums = [230, 932, 930, 778, 892, 889, 449, 44, 805, 632, 193, 370, 
//     847, 701, 663, 375, 214, 801, 752, 901, 93, 746, 888, 663, 514, 29,
//     693, 478, 954, 363, 443, 275, 259, 775, 704, 196, 394, 150, 966,372,
//     36, 638, 447, 482, 709, 282, 450, 13, 706, 17, 126, 592, 757,299, 
//     750, 134, 618, 914, 124, 579, 221, 37, 693, 87, 350, 970,544, 912,
//     655, 684, 271, 931, 510, 965, 661, 955, 182, 715, 626,13, 112, 496,
//     244, 572, 994, 444, 419, 161, 385, 815, 413, 733,423, 144, 128, 65,
//     100, 78, 437, 986]

// let n = Number(prompt('Введите число'));
// let arr = nums.slice(0,n)
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] % 2 === 0) {
//         arr[i] = 0
//     }
// }
// alert(arr)

//задача 6
// let a = Number(prompt('Введите число'))
// let arr = []
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] % 2 === 0) {
//         arr.push(i);
//     }
// }
// alert(arr)

//задача 7

// let nums = prompt('Введите числа через пробел').split('');
// alert(nums.reverse());

//задача 8
// let n = Number(prompt('Введите число'));
// let nums = prompt('Введите числа через пробел').split('');

// for (let i = 0; i< nums.length;i++){
//     nums[i] = nums[i] * n
// }
// alert(nums)

//задача 9

// let a = prompt('Введите числа через пробел').split('')
// let cur,prev;
// for(let i = 0; i < a.length; i++){
//     cur = Number(a[i])
//     prev = Number(a[i-1])
//     if(cur > prev) {
//         console.log(cur)
//     }
// }

let keeps_array = JSON.parse(localStorage.getItem('keeps')) []

new_keep_btn.onclick = addkeep
function render_keep(){
    keeps.innerHTML = ''
    for(let value of keeps_array){
        const keep_template = `
        <div class="col-3 p-2">
            <div class="border p-2">
                <p class="text-wrap overflow-hidden">${value}</p>
            </div>
        </div>
        `;
        keeps.insertADjacenHTML('afterbegin', keep_template)
    }
}

function add_keep(event){
    if(new_keep_btn.value){
        keeps_array.push(new_keep.value);
        localStorage.setItem('keeps', JSON.stringify(keep))
        render_keep()
        new_keep.value = ''
        localStorage.removeItem('input')
    }
}

let btn_start_add_keep = document.getElementById('start_add_btn');
new_keep.hidden = true
new_keep_btn.hidden = true

btn_start_add_keep.onclick = change_visible_add_keep
