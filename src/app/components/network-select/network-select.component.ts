import { Component, OnInit } from '@angular/core';
import Web3Obj from 'src/app/models/web3Obj';
import { environment } from 'src/environments/environment';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';

@Component({
  selector: 'app-network-select',
  templateUrl: './network-select.component.html',
  styleUrls: ['./network-select.component.css']
})
export class NetworkSelectComponent implements OnInit {
  listNetworks = environment.networks;
  defaultNetwork = environment.defaultNetwork;
  constructor() { }

  ngOnInit(): void {
  }

  setNetwork(select:HTMLSelectElement){
    let networkFind = this.listNetworks.find(network=>network.id==(+select.value));
    let networkToUse = (networkFind || this.defaultNetwork)!
    let componentDetail = AccountDetailsComponent.component;
    let componentTransaction = AccountTransactionsComponent.component;

    componentDetail.networkInfo = networkToUse;
    componentTransaction.networkInfo = networkToUse;

    Web3Obj.networkInfo = networkToUse;

    componentDetail.showAccountDetail(componentDetail.accountSelected!);
    componentTransaction.updateListtransactions();
  }

}
