import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'app/core/group/group.service';

@Component({
  selector: 'app-setgroup',
  templateUrl: './setgroup.component.html'
})
export class SetgroupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public _group: GroupService) { }
 
  ngOnInit() {
    const newgroup = Number(this.route.snapshot.paramMap.get('newgroup'));
    // const cgroup = Number(this.route.snapshot.paramMap.get('cgroup'));

    this._group.updategroup(newgroup).subscribe((resp) => {

      setTimeout(() => {
        // this.router.navigate(['/dashboard']);
        window.location.replace('/dashboard');
      }, 1000);
    });
  }

}
