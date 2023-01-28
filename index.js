import inquire from "inquirer";
import fs, { read } from "fs";
import open from 'open';

inquire.prompt([   // ambil data dari cli
    {
        name: 'path',
        message: '$ mytools '
    }
])
.then((ans)=>{   // display data ke cli
    console.clear()

    if (ans.path.indexOf('-h') != -1 && ans.path.indexOf('-t') == -1 && ans.path.indexOf('-o') == -1){
        console.log(` In this CLI tool, to make easier for you to use this tool.
        Here is a list of the available commands:
        => -t : converts the file to a json or text file, then displays it.
            example: $mytools /var/log/nginx/error.log -t json
                     $mytools /var/log/nginx/error.log -t text
        => -o : to move the location of the file, then open it.
            example: $mytools /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt
                     $mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json    
        `)
    }

    if (ans.path.indexOf('-t json') == -1 && ans.path.indexOf('-t text') == -1 
            && ans.path.indexOf('-o') == -1) {
        let i = 0
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        var finalFile = ans.path.substring(i,ans.path.length)
    }

    if (ans.path.indexOf('-t json') != -1 && ans.path.indexOf('-o') == -1){
        let i = 0
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        
        var file = ans.path.substring(i,(ans.path.indexOf('.')))
        var fileBefore = ans.path.substring(i,(ans.path.indexOf('-t json'))-1)
        console.log(file, fileBefore)
        fs.watchFile(file, (curr, prev) => {
        console.log('the file was modified')
        });
        setTimeout(
            () => fs.renameSync(fileBefore, file+'.json'), 1000
        );
        var finalFile = file + '.json'  
    }
    

    if (ans.path.indexOf('-t text') != -1 && ans.path.indexOf('-o') == -1){
        let i = 0
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        var file = ans.path.substring(i,(ans.path.indexOf('.')))
        var fileBefore = ans.path.substring(i,(ans.path.indexOf('-t text'))-1)
        console.log(file, fileBefore)
        fs.watchFile(file, (curr, prev) => {
        console.log('the file was modified')
        });
        setTimeout(
            () => fs.renameSync(fileBefore, file+'.txt'), 1000
        );
        var finalFile = file + '.txt' 
    }

    if (ans.path.indexOf('-o') != -1 && ans.path.indexOf('-t') == -1){
        let i = 0
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        let path1 = ans.path.substring(i,(ans.path.indexOf('-o'))-1)
        i = ans.path.indexOf('-o') + 2
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        let path2 = ans.path.substring(i,ans.path.length)

        fs.rename(path1, path2, function (err) {
          if (err) throw err
          console.log('Successfully - File Moved!')
        })

        var finalFile = path2 
    }

    if (ans.path.indexOf('-o') != -1 && ans.path.indexOf('-t') != -1){
        let i = 0
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        let path1 = ans.path.substring(i,(ans.path.indexOf('-t'))-1)
        
        i = (ans.path.indexOf('-o')) + 3
        while (/[^a-zA-Z]/gi.test(ans.path[i])) {
        i++;
        }
        let path2 = ans.path.substring(i, ans.path.length)

        console.log(path1)
        console.log(path2)
        fs.rename(path1, path2, function (err) {
          if (err) throw err
          console.log('Successfully - File Moved!')
        })

        var finalFile = path2 
    }
    
    open(finalFile)
})