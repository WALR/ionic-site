/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './item-reorder';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './item';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '../icon/icon.ngfactory';
import * as import11 from '../../config/config';
import * as import12 from '../icon/icon';
export class Wrapper_ItemReorder {
  /*private*/ _eventHandler:Function;
  context:import0.ItemReorder;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this.context = new import0.ItemReorder(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_reorder(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.reorder = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_1:any = this.context._enableReorder;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      view.renderer.setElementClass(el,'reorder-enabled',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context._visibleReorder;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      view.renderer.setElementClass(el,'reorder-visible',currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionItemReorder.subscribe(_eventHandler.bind(view,'ionItemReorder'))); }
  }
}
export class Wrapper_Reorder {
  /*private*/ _eventHandler:Function;
  context:import0.Reorder;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.Reorder(p0,p1);
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Reorder_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Reorder_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Reorder>;
  _Reorder_0_3:Wrapper_Reorder;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Reorder_Host0,renderType_Reorder_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-reorder',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Reorder0(this.viewUtils,this,0,this._el_0);
    this._Reorder_0_3 = new Wrapper_Reorder(this.injectorGet(import8.Item,this.parentIndex),new import9.ElementRef(this._el_0));
    this.compView_0.create(this._Reorder_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Reorder_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Reorder) && (0 === requestNodeIndex))) { return this._Reorder_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Reorder_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._Reorder_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const ReorderNgFactory:import7.ComponentFactory<import0.Reorder> = new import7.ComponentFactory<import0.Reorder>('ion-reorder',View_Reorder_Host0,import0.Reorder);
const styles_Reorder:any[] = ([] as any[]);
var renderType_Reorder:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Reorder,{});
export class View_Reorder0 extends import2.AppView<import0.Reorder> {
  _el_0:any;
  _Icon_0_3:import10.Wrapper_Icon;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Reorder0,renderType_Reorder,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'ion-icon',new import3.InlineArray4(4,'name','reorder','role','img'),(null as any));
    this._Icon_0_3 = new import10.Wrapper_Icon(this.parentView.injectorGet(import11.Config,this.parentIndex),new import9.ElementRef(this._el_0),this.renderer);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.Icon) && (0 === requestNodeIndex))) { return this._Icon_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'reorder';
    this._Icon_0_3.check_name(currVal_0_0_0,throwOnChange,false);
    this._Icon_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._Icon_0_3.checkHost(this,this,this._el_0,throwOnChange);
  }
  destroyInternal():void {
    this._Icon_0_3.ngOnDestroy();
  }
}