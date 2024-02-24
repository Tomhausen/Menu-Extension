
namespace miniMenu{


    function createMenuAndPauseGame(items: miniMenu.MenuItem[]): miniMenu.MenuSprite{
        let img = image.screenImage().clone();
        game.pushScene();
        scene.setBackgroundImage(img)
        let myMenu = miniMenu.createMenuFromArray(items);
        myMenu.onButtonPressed(controller.A, function (selection: string, selectedIndex: number) {
            myMenu.close(); 
            game.popScene();
        })
        return myMenu
    }

    /**
     * Creates and returns a menu from an array of menu items passed in. Can toggle if the game is paused or not
     */
    //% blockId=createPauseableMenu
    //% block="create menu from $items where pause is $isPaused"
    //% blockSetVariable=myMenu
    //% items.shadow=lists_create_with
    //% items.defl=mini_menu_create_menu_item
    //% group="Create"
    //% weight=99

    export function createPauseableMenu(isPaused: boolean, items: miniMenu.MenuItem[]): miniMenu.MenuSprite{
        let myMenu: miniMenu.MenuSprite;
        if (isPaused){
            myMenu = createMenuAndPauseGame(items);
        }
        else{
            myMenu = createMenuFromArray(items);
        }
        return myMenu
    }

}