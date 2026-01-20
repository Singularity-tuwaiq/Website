const blogData = {
    1: {
        title: "لماذا الفيزياء تحتاج البرمجة؟",
        body: "في العصر الحديث، لم تعد الفيزياء تعتمد فقط على الورقة والقلم. المحاكاة الحاسوبية (Simulation) أصبحت جزءاً لا يتجزأ من اكتشاف الثقوب السوداء ودراسة الجسيمات الدقيقة. البرمجة بلغات مثل Python تسمح للفيزيائيين بمعالجة ملايين البيانات في ثوانٍ، وهو ما يفعله فريق Singularity في مشاريعنا المدرسية."
    },
    2: {
        title: "ما هي Singularity؟",
        body: "مصطلح Singularity أو (التفرد) في الفيزياء يشير إلى نقطة في الزمكان حيث تصبح الجاذبية لا نهائية وتنهار قوانين الفيزياء المعروفة، مثل مركز الثقب الأسود. أما في التقنية، فهو يشير إلى اللحظة التي سيتفوق فيها الذكاء الاصطناعي على الذكاء البشري. نحن اخترنا هذا الاسم لنجمع بين غموض الفيزياء وقوة التقنية."
    },
    3: {
        title: "كيف تصنع محرك فيزيائي؟",
        body: "لصناعة محرك فيزيائي بسيط، عليك أولاً تعريف قوانين نيوتن كدوال برمجية. القوة = الكتلة × التسارع. في البرمجة، نقوم بتحديث موقع الجسم في كل إطار (Frame) بناءً على سرعته، ونحدث سرعته بناءً على القوى المؤثرة عليه مثل الجاذبية والاحتكاك."
    }
};

const modal = document.getElementById('blogModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openBlog(id) {
    const post = blogData[id];
    if (post) {
        modalTitle.innerText = post.title;
        modalBody.innerText = post.body;
        modal.style.display = 'flex';
    }
}

function closeBlog() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeBlog();
    }
}