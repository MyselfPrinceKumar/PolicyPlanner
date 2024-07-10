import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements AfterViewInit{
  Question_answer=[{Question:'What types of insurance policies do you offer?',answer:` Getting a quote for an insurance policy is easy. Simply go on the
  specific insurance you have, add your details and the quote is ready, or
  if you need additional help give us a call to speak directly with one of
  our agents. You’ll need to provide some basic information about yourself
  and the type of coverage you’re looking for. Our team will work quickly
  to provide you with a competitive quote tailored to your needs. If you
  have any questions or need further assistance, we’re always here to
  help!`,showAnswer: false },

{Question:`How can I get a quote for an insurance policy?`,answer:`Getting a quote for an insurance policy is easy. Simply go on the specific insurance you have, add your details and the quote is ready, or if you need additional help give us a call to speak directly with one of our agents. You’ll need to provide some basic information about yourself and the type of coverage you’re looking for. Our team will work quickly to provide you with a competitive quote tailored to your needs. If you have any questions or need further assistance, we’re always here to help!`,showAnswer: false },
{Question:`What factors affect my insurance premium?`,answer:`Several factors can influence your insurance premium, including your age, location, type of coverage, claims history, and credit score. Additionally, specific details like the make and model of your car for auto insurance, or the size and value of your business for business insurance, can also impact your rate. 
Our team is available to discuss your unique situation and help you understand how these factors affect your premium. If you have any questions or need a personalized quote, please reach out to us!`,showAnswer: false },
{Question:` What is the process for updating my insurance policy?`,answer:`Updating your insurance policy is a straightforward process. You can make changes by logging into your account on our website, contacting our customer service team, or speaking with your dedicated insurance agent. 
Whether you need to update your coverage limits, add or remove insured items, or change your personal information, our team will guide you through the process to ensure your policy accurately reflects your current needs. If you have any questions or require assistance, we're here to help!`,showAnswer: false },
{Question:`How can I find out if my current policy provides adequate coverage?`,answer:`To determine if your current policy provides adequate coverage, start by reviewing your policy documents and coverage details. If you're unsure or need assistance, our team is here to help. Contact us for a comprehensive policy review, and our experienced agents will assess your coverage, discuss any potential gaps, and recommend adjustments if necessary. Ensuring you have the right coverage is our priority, so feel free to reach out with any questions or concerns.
`,showAnswer: false },
]


selectedQuestion: any = this.Question_answer[0]; // Default to the first question

  @ViewChild('fistDiv') fistDiv!: ElementRef;
  @ViewChild('secondDiv') secondDiv!: ElementRef;
  
  Answer(i: number) {
     this.selectedQuestion = this.Question_answer[i];
  }

  // toggleAnswer(index: number) {
  //    this.Question_answer[index].showAnswer = !this.Question_answer[index].showAnswer;
  // }

  toggleAnswer(index: number) {
    this.Question_answer.forEach((faq, i) => {
      faq.showAnswer = i === index ? !faq.showAnswer : false;
    });
  }


  ngAfterViewInit(): void {
    this.adjustSecondDivHeight();

    const resizeObserver = new ResizeObserver(() => this.adjustSecondDivHeight());
    resizeObserver.observe(this.fistDiv.nativeElement);
  }

  private adjustSecondDivHeight(): void {
    const fistDivHeight = this.fistDiv.nativeElement.offsetHeight;
    this.secondDiv.nativeElement.style.height = (fistDivHeight + 100) + 'px';
  }
}
