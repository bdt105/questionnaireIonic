import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionnaireService } from '@appSharedServices/questionnaire.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous.service';
import { QuestionnaireComponent } from '@appSharedComponents/questionnaire.component';

@Component({
    selector: 'questionnaireLocal',
    templateUrl: './questionnaireLocal.component.html',
    providers: []
})

export class QuestionnaireLocalComponent extends QuestionnaireComponent {


    constructor(public router: Router, public questionnaireService: QuestionnaireService, public miscellaneousService: MiscellaneousService){
        super(router, questionnaireService, miscellaneousService);
    }

    ngOnInit(){
    }

    // deleteWithConfirmation() {
    //     if (this.questionnaireService.isQuestionnaireEmpty(this.__questionnaire)){
    //         this.delete(this.__questionnaire);
    //     }else{
    //         this.bsModalRef = this.modalService.show(ConfirmationComponent);
    //         this.bsModalRef.content.modalRef = this.bsModalRef;
    //         this.bsModalRef.content.title = this.translate("Deleting a questionnaire");
    //         this.bsModalRef.content.message = this.translate("Are you sure you want to delete " + this.questionnaire.type + " '" + 
    //             (this.questionnaire.title ? this.questionnaire.title : this.questionnaire.defaultTitle) + "'");
    //         this.bsModalRef.content.button1Label = this.translate("Yes");
    //         this.bsModalRef.content.button2Label = this.translate("No");
    //         this.bsModalRef.content.button1Click.subscribe(result => {
    //             this.delete(this.__questionnaire);
    //         });
    //     }
    // }

    // importQuestion(){
    //     this.bsModalRef = this.modalService.show(ConfirmationComponent);
    //     this.bsModalRef.content.modalRef = this.bsModalRef;
    //     this.bsModalRef.content.title = this.translate("Importing a question");
    //     this.bsModalRef.content.readOnly = false;
    //     this.bsModalRef.content.bodyMessage = this.translate("Paste json format below and import");
    //     this.bsModalRef.content.button2Label = this.translate("Cancel");
    //     this.bsModalRef.content.button1Label = this.translate("Import");
    //     this.bsModalRef.content.button1Click.subscribe(result => {
    //         let json = this.bsModalRef.content.message;
    //         this.questionnaireService.importQuestion(json, this.questionnaire, 0);
    //     })
    // }    

    // export(){
    //     this.bsModalRef = this.modalService.show(ConfirmationComponent);
    //     this.bsModalRef.content.modalRef = this.bsModalRef;
    //     this.bsModalRef.content.title = this.translate("Exporting a questionnaire");
    //     this.bsModalRef.content.readOnly = false;
    //     this.bsModalRef.content.bodyMessage = this.translate("Copy the content below");;
        
    //     this.bsModalRef.content.message = JSON.stringify(this.questionnaire);
    // }
    
}