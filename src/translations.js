/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * IMPORTANT:
 * - The "en" (English) section is automatically generated from source files.
 *   Do NOT modify the "en" section manually.
 * - Other language sections (e.g., "zh-cn", "zh-tw", "ja", etc.) should be
 *   manually translated by you.
 * - When you run the extraction script again, only the "en" section will be
 *   updated. Your manual translations in other languages will be preserved.
 *
 * Structure:
 * - interface: translations for name/description (used by GUI formatMessage)
 * - extensions: translations for extension blocks (used by VM formatMessage)
 * - blocks: translations for Blockly blocks (used by Blockly.Msg)
 */

export default {
    'interface': {
        'en': {
            'arduinoNano.description': 'The Arduino Nano is a classic small board to build your projects with.'
        },
        'ru': {
            'arduinoNano.description': 'Arduino Nano — это классическая небольшая плата для создания ваших проектов.'
        },
        'zh-cn': {
            'arduinoNano.description': 'Arduino Nano 用于构建项目的经典小控制板。'
        },
        'zh-tw': {
            'arduinoNano.description': 'Arduino Nano 用於構建項目的經典小控制板。'
        }
    },
    'extensions': {
        'en': {
            'arduinoNano.modeMenu.input': 'input',
            'arduinoNano.modeMenu.output': 'output',
            'arduinoNano.modeMenu.inputPullup': 'input-pullup',
            'arduinoNano.levelMenu.high': 'high',
            'arduinoNano.levelMenu.low': 'low',
            'arduinoNano.InterrupModeMenu.risingEdge': 'rising edge',
            'arduinoNano.InterrupModeMenu.fallingEdge': 'falling edge',
            'arduinoNano.InterrupModeMenu.changeEdge': 'change edge',
            'arduinoNano.InterrupModeMenu.low': 'low',
            'arduinoNano.eolMenu.warp': 'warp',
            'arduinoNano.eolMenu.noWarp': 'no-warp',
            'arduinoNano.dataTypeMenu.integer': 'integer',
            'arduinoNano.dataTypeMenu.decimal': 'decimal',
            'arduinoNano.dataTypeMenu.string': 'string',
            'arduinoNano.category.pins': 'Pins',
            'arduinoNano.pins.setPinMode': 'set pin [PIN] mode [MODE]',
            'arduinoNano.pins.setDigitalOutput': 'set digital pin [PIN] out [LEVEL]',
            'arduinoNano.pins.setPwmOutput': 'set pwm pin [PIN] out [OUT]',
            'arduinoNano.pins.readDigitalPin': 'read digital pin [PIN]',
            'arduinoNano.pins.readAnalogPin': 'read analog pin [PIN]',
            'arduinoNano.pins.setServoOutput': 'set servo pin [PIN] out [OUT]',
            'arduinoNano.pins.attachInterrupt': 'attach interrupt pin [PIN] mode [MODE] executes',
            'arduinoNano.pins.detachInterrupt': 'detach interrupt pin [PIN]',
            'arduinoNano.category.serial': 'Serial',
            'arduinoNano.serial.serialBegin': 'serial begin baudrate [VALUE]',
            'arduinoNano.serial.serialPrint': 'serial print [VALUE] [EOL]',
            'arduinoNano.serial.serialAvailable': 'serial available data length',
            'arduinoNano.serial.serialReadAByte': 'serial read a byte',
            'arduinoNano.category.data': 'Data',
            'arduinoNano.data.dataMap': 'map [DATA] from ([ARG0], [ARG1]) to ([ARG2], [ARG3])',
            'arduinoNano.data.dataConstrain': 'constrain [DATA] between ([ARG0], [ARG1])',
            'arduinoNano.data.dataConvert': 'convert [DATA] to [TYPE]',
            'arduinoNano.data.dataConvertASCIICharacter': 'convert [DATA] to ASCII character',
            'arduinoNano.data.dataConvertASCIINumber': 'convert [DATA] to ASCII nubmer'
        },
        'ru': {
            'arduinoNano.modeMenu.input': 'ввод',
            'arduinoNano.modeMenu.output': 'вывод',
            'arduinoNano.modeMenu.inputPullup': 'ввод подтягивается к питанию',
            'arduinoNano.levelMenu.high': 'высокий',
            'arduinoNano.levelMenu.low': 'низкий',
            'arduinoNano.InterrupModeMenu.risingEdge': 'поднимающийся край',
            'arduinoNano.InterrupModeMenu.fallingEdge': 'падающий край',
            'arduinoNano.InterrupModeMenu.changeEdge': 'Изменить край',
            'arduinoNano.InterrupModeMenu.low': 'низкий',
            'arduinoNano.eolMenu.warp': 'перенос',
            'arduinoNano.eolMenu.noWarp': 'не переносить',
            'arduinoNano.dataTypeMenu.integer': 'целое',
            'arduinoNano.dataTypeMenu.decimal': 'десятичное',
            'arduinoNano.dataTypeMenu.string': 'строка',
            'arduinoNano.category.pins': 'Пины',
            'arduinoNano.pins.setPinMode': 'установить пин [PIN] режим [MODE]',
            'arduinoNano.pins.setDigitalOutput': 'установить цифровой пин [PIN] на [LEVEL]',
            'arduinoNano.pins.setPwmOutput': 'установить ШИМ пин [PIN] в [OUT]',
            'arduinoNano.pins.readDigitalPin': 'читать цифровой пин [PIN]',
            'arduinoNano.pins.readAnalogPin': 'читать аналоговый вывод [PIN]',
            'arduinoNano.pins.setServoOutput': 'установить серво пин [PIN] в [OUT]',
            'arduinoNano.pins.attachInterrupt': 'подключить прерывания на [PIN] в режиме [MODE] и выполнить',
            'arduinoNano.pins.detachInterrupt': 'отсоединить контакт прерывания [PIN]',
            'arduinoNano.category.serial': 'Серийный',
            'arduinoNano.serial.serialBegin': 'скорость последовательного порта [VALUE]',
            'arduinoNano.serial.serialPrint': 'В последовательный порт печатать [VALUE] [EOL]',
            'arduinoNano.serial.serialAvailable': 'доступная длина данных серийного порта',
            'arduinoNano.serial.serialReadAByte': 'Из последовательного порта прочитать байт',
            'arduinoNano.category.data': 'Данные',
            'arduinoNano.data.dataMap': 'сопоставить [DATA] с ([ARG0], [ARG1]) на ([ARG2], [ARG3])',
            'arduinoNano.data.dataConstrain': 'ограничить [DATA] между ([ARG0], [ARG1])',
            'arduinoNano.data.dataConvert': 'преобразовать [DATA] в [TYPE]',
            'arduinoNano.data.dataConvertASCIICharacter': 'преобразовать [DATA] в символ ASCII',
            'arduinoNano.data.dataConvertASCIINumber': 'преобразовать [DATA] в число ASCII'
        },
        'zh-cn': {
            'arduinoNano.modeMenu.input': '输入',
            'arduinoNano.modeMenu.output': '输出',
            'arduinoNano.modeMenu.inputPullup': '输入上拉',
            'arduinoNano.levelMenu.high': '高',
            'arduinoNano.levelMenu.low': '低',
            'arduinoNano.InterrupModeMenu.risingEdge': '上升沿',
            'arduinoNano.InterrupModeMenu.fallingEdge': '下降沿',
            'arduinoNano.InterrupModeMenu.changeEdge': '电平改变',
            'arduinoNano.InterrupModeMenu.low': '低电平',
            'arduinoNano.eolMenu.warp': '换行',
            'arduinoNano.eolMenu.noWarp': '不换行',
            'arduinoNano.dataTypeMenu.integer': '整数',
            'arduinoNano.dataTypeMenu.decimal': '小数',
            'arduinoNano.dataTypeMenu.string': '字符串',
            'arduinoNano.category.pins': '引脚',
            'arduinoNano.pins.setPinMode': '设置引脚 [PIN] 模式 [MODE]',
            'arduinoNano.pins.setDigitalOutput': '设置引脚 [PIN] 输出为 [LEVEL]',
            'arduinoNano.pins.setPwmOutput': '设置引脚 [PIN] pwm为 [OUT]',
            'arduinoNano.pins.readDigitalPin': '读取数字引脚 [PIN]',
            'arduinoNano.pins.readAnalogPin': '读取模拟引脚 [PIN]',
            'arduinoNano.pins.setServoOutput': '设置舵机引脚 [PIN] 输出 [OUT]',
            'arduinoNano.pins.attachInterrupt': '设置中断引脚 [PIN] 模式 [MODE] 执行',
            'arduinoNano.pins.detachInterrupt': '取消中断引脚 [PIN]',
            'arduinoNano.category.serial': '串口',
            'arduinoNano.serial.serialBegin': '串口启动波特率 [VALUE]',
            'arduinoNano.serial.serialPrint': '串口打印 [VALUE] [EOL]',
            'arduinoNano.serial.serialAvailable': '串口可读取字节数',
            'arduinoNano.serial.serialReadAByte': '串口读取1个字节',
            'arduinoNano.category.data': '数据',
            'arduinoNano.data.dataMap': '映射 [DATA] 从 ([ARG0], [ARG1]) 到 ([ARG2], [ARG3])',
            'arduinoNano.data.dataConstrain': '约束[DATA] 介于 ([ARG0], [ARG1])',
            'arduinoNano.data.dataConvert': '转换 [DATA] 为 [TYPE]',
            'arduinoNano.data.dataConvertASCIICharacter': '转换 [DATA] 为 ASCII 字符',
            'arduinoNano.data.dataConvertASCIINumber': '转换 [DATA] 为 ASCII 编码'
        },
        'zh-tw': {
            'arduinoNano.modeMenu.input': '輸入',
            'arduinoNano.modeMenu.output': '輸出',
            'arduinoNano.modeMenu.inputPullup': '輸入上拉',
            'arduinoNano.levelMenu.high': '高',
            'arduinoNano.levelMenu.low': '低',
            'arduinoNano.InterrupModeMenu.risingEdge': '上升沿',
            'arduinoNano.InterrupModeMenu.fallingEdge': '下降沿',
            'arduinoNano.InterrupModeMenu.changeEdge': '電位改變',
            'arduinoNano.InterrupModeMenu.low': '低',
            'arduinoNano.eolMenu.warp': '換行',
            'arduinoNano.eolMenu.noWarp': '不換行',
            'arduinoNano.dataTypeMenu.integer': '整數',
            'arduinoNano.dataTypeMenu.decimal': '小數',
            'arduinoNano.dataTypeMenu.string': '字串',
            'arduinoNano.category.pins': '腳位',
            'arduinoNano.pins.setPinMode': '設置腳位 [PIN] 模式 [MODE]',
            'arduinoNano.pins.setDigitalOutput': '設置腳位 [PIN] 輸出 [LEVEL]',
            'arduinoNano.pins.setPwmOutput': '設置 pwm 腳位 [PIN] 輸出 [OUT]',
            'arduinoNano.pins.readDigitalPin': '讀取數位腳位 [PIN]',
            'arduinoNano.pins.readAnalogPin': '讀取類比腳位 [PIN]',
            'arduinoNano.pins.setServoOutput': '設置舵機腳位 [PIN] 輸出 [OUT]',
            'arduinoNano.pins.attachInterrupt': '設置中斷腳位 [PIN] 模式 [MODE] 執行',
            'arduinoNano.pins.detachInterrupt': '取消中斷腳位 [PIN]',
            'arduinoNano.category.serial': '串口',
            'arduinoNano.serial.serialBegin': '串口啟動鮑率 [VALUE]',
            'arduinoNano.serial.serialPrint': '串口列印 [VALUE] [EOL]',
            'arduinoNano.serial.serialAvailable': '串口可讀取字節數',
            'arduinoNano.serial.serialReadAByte': '串口讀取1個字節',
            'arduinoNano.category.data': '數據',
            'arduinoNano.data.dataMap': '映射 [DATA] 從 ([ARG0], [ARG1]) 到 ([ARG2], [ARG3])',
            'arduinoNano.data.dataConstrain': '約束 [DATA] 介於 ([ARG0], [ARG1])',
            'arduinoNano.data.dataConvert': '轉換 [DATA] 為 [TYPE]',
            'arduinoNano.data.dataConvertASCIICharacter': '轉換 [DATA] 為 ASCII 字符',
            'arduinoNano.data.dataConvertASCIINumber': '轉換 [DATA] 為 ASCII 編碼'
        }
    },
    'blocks': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    }
};
