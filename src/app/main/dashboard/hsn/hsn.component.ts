import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { TABLE_CONFIG } from 'src/app/core/constants/table.settings';
import { HsnService } from 'src/app/core/services/dashboard/hsn.service';



@Component({
  selector: 'app-hsn',
  templateUrl: './hsn.component.html',
  styleUrls: ['./hsn.component.scss']
})
export class HSNComponent implements OnInit {
  tableSetting = TABLE_CONFIG
  constructor(private HsnService: HsnService,private toast:NbToastrService) { }


  data: LocalDataSource = new LocalDataSource();
  ngOnInit(): void {
    this.getHSNList()
    // this.data.getAll()
  }
  getHSNList(force=false) {
    let HSNList = JSON.parse(localStorage.getItem('HSNList'))
    if (HSNList && !force ) {
      this.data =HSNList
      return
    }
    this.HsnService.getList().subscribe(data => {
      let response: any = data
      if(this.data.load){
        this.data.load(response.Items)
      }else{
        this.data = response.Items
      }
     
      localStorage.setItem('HSNList', JSON.stringify(response.Items))
    }, err => {
      console.log(err)
      // this.tableSetting = {...this.tableSetting,noDataMessage:'Error loading data!'}
    })
  }

  onDeleteConfirm(event): void {
    console.log(event)
  }
  onEdit(event): void {
    console.log(event)
    let requestBody = {
      hsnCode:  event.newData.sk,
      gst: event.newData.gst,
      description: event.newData.description
    }
    if(requestBody.hsnCode =='' || requestBody.gst=='' || requestBody.description == '' )
    {
      this.toast.warning('All field required!','Invalid Input')
      event.confirm.reject()
      return
    }
    this.HsnService.updateHsn(requestBody.hsnCode,requestBody.gst,requestBody.description).subscribe(data=>{
      this.toast.success('HSN Updated','Success')
      localStorage.removeItem('HSNList')
      localStorage.setItem('HSNList',JSON.stringify(this.data))
      event.confirm.resolve()
    },error=>{
      this.toast.danger(JSON.parse(error.error).error.message?JSON.parse(error.error).error.message:'Unknown Error Occured','Error')
      event.confirm.reject()
    })
  }

  onCreate(event): void {
    let requestBody = {
      hsnCode:  event.newData.sk,
      gst: event.newData.gst,
      description: event.newData.description
    }
    if(requestBody.hsnCode =='' || requestBody.gst=='' || requestBody.description == '' )
    {
      this.toast.warning('All field required!','Invalid Input')
      event.confirm.reject()
    }
    this.HsnService.addHsn(requestBody.hsnCode,requestBody.gst,requestBody.description).subscribe(data=>{
      this.toast.success('HSN added','Success')
      console.log(this.data)
      localStorage.removeItem('HSNList')
      localStorage.setItem('HSNList',JSON.stringify(this.data))
      event.confirm.resolve()
      
      
    },error=>{
      this.toast.danger(JSON.parse(error.error).error.message?JSON.parse(error.error).error.message:'Unknown Error Occured','Error')
      event.confirm.reject()
    })
    
  }
}
