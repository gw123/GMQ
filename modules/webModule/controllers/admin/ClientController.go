package admin

import (
	"github.com/gw123/GMQ/core/interfaces"
	"github.com/gw123/GMQ/modules/webModule/controllers"
	"github.com/gw123/GMQ/modules/webModule/db_models"
	"github.com/labstack/echo"
	"strconv"
)

type ClientController struct {
	controllers.BaseController
}

func NewClientController(module interfaces.Module) *ClientController {
	temp := new(ClientController)
	temp.BaseController.Module = module
	return temp
}

/***
 * 登录并且检测是否有新的版本
 */
func (this *ClientController) ClientList(ctx echo.Context) error {
	db, err := this.Module.GetApp().GetDefaultDb()
	if err != nil {
		return this.Fail(ctx, 0, "获取列表失败1", err)
	}

	clients := &[]db_models.Client{}
	res := db.Find(clients)
	if res.Error != nil && !res.RecordNotFound() {
		return this.Fail(ctx, 0, "获取列表失败2", err)
	}

	return this.Success(ctx, clients)
}

/***
  获取服务端配置的客户端信息,任务列表
 */

func (this *ClientController) ClientInfo(ctx echo.Context) error {
	db, err := this.Module.GetApp().GetDefaultDb()
	client_id_r := ctx.Param("client_id")
	client_id, err := strconv.Atoi(client_id_r)
	if err != nil {
		return this.Fail(ctx, 0, "client_id err", err)
	}

	client := &db_models.Client{}
	client.ID = uint(client_id)
	//clientTasks := &[]db_models.ClientTask{}

	//db.LogMode(true)
	err = db.First(client, map[string]interface{}{"id": client_id}).Error
	if err != nil {
		return this.Fail(ctx, controllers.ErrorDb, "find client err", err)
	}

	res := db.Find(&client.ClientTasks, map[string]interface{}{"client_id": client_id})
	if res.Error != nil && !res.RecordNotFound() {
		return this.Fail(ctx, controllers.ErrorDb, "find client_task err", err)
	}

	return this.Success(ctx, client)
}
