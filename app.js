const faqs = [
  {
    question: "What is personalized nutrition coaching?",
    answer:
      "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
  },
  {
    question: "How can nutrition coaching help me lose weight?",
    answer:
      "Nutrition coaching helps you lose weight by guiding you to make healthier food choices tailored to your specific needs. By focusing on balanced, nutrient-dense meals and adjusting portion sizes, you'll develop sustainable habits that support your weight loss goals while maintaining energy and health.",
  },
  {
    question: "Can I still enjoy my favorite foods while on a nutrition plan?",
    answer:
      "Yes, personalized nutrition coaching is about balance. You can still enjoy your favorite foods in moderation. Your nutritionist will help you incorporate them into your plan in a way that supports your goals without compromising your enjoyment or health.",
  },
  {
    question: "How often will I have contact with my nutritionist?",
    answer:
      "The frequency of contact depends on your personalized plan and goals. Typically, you'll have regular check-ins, whether weekly, bi-weekly, or monthly, to track progress, make adjustments, and provide ongoing support. This ensures you stay on track and feel confident in your plan.",
  },
  {
    question: "How long will it take to see results?",
    answer:
      "Results vary based on individual goals and commitment. However, many clients begin to notice improvements in energy, mood, and overall well-being within the first few weeks. Significant weight loss or health changes may take a few months, depending on the approach and consistency.",
  },
  {
    question:
      "Are the meal plans and recipes provided suitable for vegetarians or vegans?",
    answer:
      "Absolutely! Personalized nutrition coaching can accommodate vegetarian and vegan diets. Your nutritionist will work with you to create meal plans that meet your dietary preferences while ensuring you receive the necessary nutrients to support your health and goals.",
  }
];

console.log(faqs)

const accordion = document.getElementById('accordion')

faqs.map((faq) => {
    const accordionItem = document.createElement('div')
    accordionItem.classList.add('accordion-item')
    accordionItem.innerHTML = `
    <div class="accordion-question">
    <h2>${faq.question}</h2>
    <i class="fa-solid fa-plus"></i>
    </div>
    <p class="accordion-answer paragraph" style="display: none;">${faq.answer}</p>
    `;

    const accordionQuestion = accordionItem.querySelector('.accordion-question');
    const icon = accordionQuestion.querySelector('i');
    
    accordionQuestion.addEventListener('click', () => {
        const accordionAnswer = accordionItem.querySelector('.accordion-answer');

        
        if(accordionAnswer.style.display === 'block'){
            accordionAnswer.style.display = 'none';
            icon.classList.remove('fa-xmark')
            icon.classList.add('fa-plus');
        }else{
            const allAccordionAnswers = document.querySelectorAll('.accordion-answer');
            const Icons = document.querySelectorAll('.accordion-question i');

            allAccordionAnswers.forEach((answer) => {
                answer.style.display = 'none';
            })

            Icons.forEach( (icon) => {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-plus');
            })

            accordionAnswer.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-xmark');
        }
    })
    accordion.appendChild(accordionItem)
})
